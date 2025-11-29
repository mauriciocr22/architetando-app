import axios from "axios";

const API_KEY = "fd229991c4ab9b526eedf5a4ec9ba9ab";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherSantos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: "Santos,BR",
        appid: API_KEY,
        units: "metric",
        lang: "pt_br",
      },
    });

    const { data } = response;
    return {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      feelsLike: Math.round(data.main.feels_like),
      city: data.name,
      iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    return {
      temperature: 25,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 70,
      feelsLike: 26,
      city: "Santos",
      iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
      error: "Não foi possível carregar dados reais. Configure sua API key.",
    };
  }
};

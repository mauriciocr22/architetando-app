import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { getWeatherSantos } from '../../services/weatherApi';
import { colors } from '../../constants/colors';
import { styles } from './styles';

/**
 * Componente WeatherWidget
 * Exibe informações do clima de Santos/SP usando OpenWeatherMap API
 */
const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeather();
  }, []);

  const loadWeather = async () => {
    setLoading(true);
    const data = await getWeatherSantos();
    setWeather(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={colors.primary} />
        <Text style={styles.loadingText}>Carregando clima...</Text>
      </View>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: weather.iconUrl }}
        style={styles.weatherIcon}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.cityName}>{weather.city}, SP</Text>
        <Text style={styles.temperature}>{weather.temperature}°C</Text>
        <Text style={styles.description}>{weather.description}</Text>
        <Text style={styles.details}>
          Sensação: {weather.feelsLike}°C • Umidade: {weather.humidity}%
        </Text>
        {weather.error && (
          <Text style={styles.errorText}>{weather.error}</Text>
        )}
      </View>
    </View>
  );
};

export default WeatherWidget;

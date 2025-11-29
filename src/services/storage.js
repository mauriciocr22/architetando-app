import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  FAVORITE_VIDEOS: "@architetando:favorite_videos",
  FAVORITE_IMAGES: "@architetando:favorite_images",
};

export const saveFavoriteVideos = async (videoIds) => {
  try {
    await AsyncStorage.setItem(KEYS.FAVORITE_VIDEOS, JSON.stringify(videoIds));
    return true;
  } catch (error) {
    console.error("Erro ao salvar vídeos favoritos:", error);
    return false;
  }
};

export const getFavoriteVideos = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.FAVORITE_VIDEOS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao carregar vídeos favoritos:", error);
    return [];
  }
};

export const toggleFavoriteVideo = async (videoId) => {
  try {
    const favorites = await getFavoriteVideos();
    const index = favorites.indexOf(videoId);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(videoId);
    }

    await saveFavoriteVideos(favorites);
    return favorites;
  } catch (error) {
    console.error("Erro ao alternar favorito do vídeo:", error);
    return [];
  }
};

export const saveFavoriteImages = async (imageIds) => {
  try {
    await AsyncStorage.setItem(KEYS.FAVORITE_IMAGES, JSON.stringify(imageIds));
    return true;
  } catch (error) {
    console.error("Erro ao salvar imagens favoritas:", error);
    return false;
  }
};

export const getFavoriteImages = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.FAVORITE_IMAGES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao carregar imagens favoritas:", error);
    return [];
  }
};

export const toggleFavoriteImage = async (imageId) => {
  try {
    const favorites = await getFavoriteImages();
    const index = favorites.indexOf(imageId);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(imageId);
    }

    await saveFavoriteImages(favorites);
    return favorites;
  } catch (error) {
    console.error("Erro ao alternar favorito da imagem:", error);
    return [];
  }
};

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';
import { getArchitetandoVideos } from '../../services/youtubeApi';
import { getFavoriteVideos, toggleFavoriteVideo } from '../../services/storage';
import { colors } from '../../constants/colors';
import { styles } from './styles';

/**
 * Tela de Vídeos
 * Lista de vídeos educativos da Architetando
 * API: YouTube Data API - busca detalhes dos vídeos
 * AsyncStorage: salva vídeos favoritados
 */
const VideosScreen = () => {
  const [videos, setVideos] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    // Carrega vídeos e favoritos em paralelo
    const [videosData, favoritesData] = await Promise.all([
      getArchitetandoVideos(),
      getFavoriteVideos(),
    ]);
    setVideos(videosData);
    setFavoriteIds(favoritesData);
    setLoading(false);
  };

  const handleToggleFavorite = async (videoId) => {
    const newFavorites = await toggleFavoriteVideo(videoId);
    setFavoriteIds(newFavorites);
  };

  return (
    <View style={styles.container}>
      <Header title="Vídeos Educativos" />
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.title}>Conteúdo Educativo</Text>
        <Text style={styles.subtitle}>
          Vídeos produzidos em parceria com a UNIMONTE sobre arquitetura,
          história e características de Santos/SP. Toque no vídeo para assistir
          no YouTube ou favorite os que mais gostar!
        </Text>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Carregando vídeos...</Text>
          </View>
        ) : videos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhum vídeo disponível no momento.
            </Text>
          </View>
        ) : (
          videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isFavorite={favoriteIds.includes(video.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default VideosScreen;

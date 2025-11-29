import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';
import { getArchitetandoVideos } from '../../services/youtubeApi';
import { getFavoriteVideos, toggleFavoriteVideo } from '../../services/storage';
import { colors } from '../../constants/colors';
import { styles } from './styles';

const VideosScreen = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const videosData = await getArchitetandoVideos();
    const favorites = await getFavoriteVideos();
    setVideos(videosData);
    setFavoriteVideos(favorites);
    setLoading(false);
  };

  const handleToggleFavorite = async (videoId) => {
    const updatedFavorites = await toggleFavoriteVideo(videoId);
    setFavoriteVideos(updatedFavorites);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Vídeos Educativos" />
      <ScrollView style={styles.scrollContent} contentContainerStyle={{paddingBottom: 80}}>
        <Text style={styles.title}>Conteúdo Educativo</Text>
        <Text style={styles.subtitle}>
          Vídeos produzidos em parceria com a UNIMONTE sobre arquitetura,
          história e características de Santos/SP. Toque no vídeo para assistir
          no YouTube.
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
              isFavorite={favoriteVideos.includes(video.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideosScreen;

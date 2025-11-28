import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import ImageCard from '../../components/ImageCard';
import { getAllGalleryImages } from '../../services/unsplashApi';
import { getFavoriteImages, toggleFavoriteImage } from '../../services/storage';
import { colors } from '../../constants/colors';
import { styles } from './styles';

/**
 * Tela de Galeria
 * Exibe obras de revitalização da Architetando + imagens do Unsplash
 * API: Unsplash - busca imagens complementares de arquitetura histórica
 * AsyncStorage: salva imagens favoritadas
 */
const GalleryScreen = () => {
  const [images, setImages] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    // Carrega imagens e favoritos em paralelo
    const [imagesData, favoritesData] = await Promise.all([
      getAllGalleryImages(),
      getFavoriteImages(),
    ]);
    setImages(imagesData);
    setFavoriteIds(favoritesData);
    setLoading(false);
  };

  const handleToggleFavorite = async (imageId) => {
    const newFavorites = await toggleFavoriteImage(imageId);
    setFavoriteIds(newFavorites);
  };

  return (
    <View style={styles.container}>
      <Header title="Galeria de Obras" />
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.title}>Projetos e Inspirações</Text>
        <Text style={styles.subtitle}>
          Conheça nossos projetos de revitalização e conservação de
          patrimônio histórico, além de referências inspiradoras de
          arquitetura ao redor do mundo.
        </Text>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Carregando galeria...</Text>
          </View>
        ) : images.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhuma imagem disponível no momento.
            </Text>
          </View>
        ) : (
          <View style={styles.galleryGrid}>
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                isFavorite={favoriteIds.includes(image.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default GalleryScreen;

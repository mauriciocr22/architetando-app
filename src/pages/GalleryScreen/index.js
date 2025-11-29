import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import { getFavoriteImages, toggleFavoriteImage } from '../../services/storage';
import { styles } from './styles';

const GalleryScreen = () => {
  const [favoriteProjects, setFavoriteProjects] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favorites = await getFavoriteImages();
    setFavoriteProjects(favorites);
  };

  const handleToggleFavorite = async (projectId) => {
    const updatedFavorites = await toggleFavoriteImage(projectId);
    setFavoriteProjects(updatedFavorites);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Galeria de Obras" />
      <ScrollView style={styles.scrollContent} contentContainerStyle={{paddingBottom: 80}}>
        <Text style={styles.title}>Nossos Projetos</Text>
        <Text style={styles.subtitle}>
          Conheça nossos projetos de revitalização e conservação de
          patrimônio histórico em Santos e região.
        </Text>

        <View style={styles.projectsList}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFavorite={favoriteProjects.includes(project.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GalleryScreen;

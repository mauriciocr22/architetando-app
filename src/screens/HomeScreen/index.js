import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import WeatherWidget from '../../components/WeatherWidget';
import { styles } from './styles';

/**
 * Tela Home
 * Apresentação da empresa Architetando com informações extraídas do site
 * API: OpenWeatherMap - mostra clima atual de Santos/SP
 */
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Architetando" />
      <ScrollView style={styles.scrollContent}>
        {/* Logo da empresa */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>ARCHITETANDO</Text>
        </View>

        <Text style={styles.title}>Architetando Cursos de Arquitetura</Text>
        <Text style={styles.subtitle}>Centro Histórico de Santos/SP</Text>

        {/* Widget de Clima - API OpenWeatherMap */}
        <WeatherWidget />

        {/* Sobre a Empresa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bem-vindo!</Text>
          <Text style={styles.description}>
            A Architetando é uma empresa especializada em cursos de arquitetura,
            com foco em patrimônio histórico, restauração e educação continuada
            para profissionais da área.{'\n\n'}
            Localizada no coração do Centro Histórico de Santos, oferecemos
            conteúdo educativo de qualidade sobre história da arquitetura,
            técnicas de conservação e características geográficas que moldaram
            nossa cidade.{'\n\n'}
            Nossos cursos abordam temas como restauração de edifícios históricos,
            conservação de patrimônio, adaptação de estruturas antigas e muito mais.
          </Text>
        </View>

        {/* Cards de navegação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore</Text>
          <View style={styles.cardsContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Videos')}
            >
              <Text style={styles.cardIcon}>▶️</Text>
              <Text style={styles.cardTitle}>Vídeos Educativos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('About')}
            >
              <Text style={styles.cardIcon}>ℹ️</Text>
              <Text style={styles.cardTitle}>Sobre Nós</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Gallery')}
            >
              <Text style={styles.cardIcon}>🖼️</Text>
              <Text style={styles.cardTitle}>Galeria de Obras</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('About')}
            >
              <Text style={styles.cardIcon}>📞</Text>
              <Text style={styles.cardTitle}>Contato</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

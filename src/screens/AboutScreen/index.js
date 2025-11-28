import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';

/**
 * Tela Sobre
 * Informações sobre a Architetando
 * API: Google Maps - mostra localização da empresa
 */
const AboutScreen = () => {
  // Coordenadas da Praça Visc. de Mauá, 29 - Centro, Santos/SP
  const location = {
    latitude: -23.9395,
    longitude: -46.3322,
  };

  const address = 'Praça Visc. de Mauá, 29 - sala 422 - Centro, Santos - SP, 11010-000';

  // Abre endereço no Google Maps
  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Header title="Sobre Nós" />
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.title}>Architetando Cursos de Arquitetura</Text>

        {/* Sobre a Empresa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quem Somos</Text>
          <View style={styles.card}>
            <Text style={styles.text}>
              A <Text style={styles.boldText}>Architetando</Text> é uma empresa
              especializada em educação e capacitação profissional na área de
              arquitetura, com foco especial em patrimônio histórico e restauração.
            </Text>
            <Text style={styles.text}>
              Oferecemos cursos voltados para profissionais e estudantes de
              arquitetura, abordando temas como:
            </Text>
            <Text style={styles.text}>• Restauração de edifícios históricos</Text>
            <Text style={styles.text}>• Conservação de patrimônio arquitetônico</Text>
            <Text style={styles.text}>• Adaptação de estruturas antigas</Text>
            <Text style={styles.text}>• História da arquitetura brasileira</Text>
            <Text style={styles.text}>• Técnicas de revitalização urbana</Text>
          </View>
        </View>

        {/* Localização */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossa Localização</Text>
          <View style={styles.card}>
            <Text style={styles.text}>
              Estamos localizados no coração do Centro Histórico de Santos,
              uma das áreas mais ricas em patrimônio arquitetônico do Brasil.
            </Text>
          </View>

          {/* Mapa - Google Maps (Deep Link) */}
          <TouchableOpacity
            style={styles.mapContainer}
            onPress={openInMaps}
            activeOpacity={0.8}
          >
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapIcon}>📍</Text>
              <Text style={styles.mapTitle}>Centro Histórico de Santos</Text>
              <Text style={styles.mapSubtitle}>
                Praça Visc. de Mauá, 29{'\n'}
                Sala 422 - Centro{'\n'}
                Santos - SP, 11010-000
              </Text>
              <View style={styles.mapButton}>
                <Text style={styles.mapButtonText}>🗺️ Abrir no Google Maps</Text>
              </View>
              <Text style={styles.mapHint}>
                Toque para ver a localização completa
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Contato */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contato</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={openInMaps}
            >
              <Text style={styles.contactIcon}>📍</Text>
              <Text style={styles.contactText}>{address}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => Linking.openURL('tel:+5513991370528')}
            >
              <Text style={styles.contactIcon}>📞</Text>
              <Text style={styles.contactText}>(13) 99137-0528</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => Linking.openURL('https://www.architetando.com.br')}
            >
              <Text style={styles.contactIcon}>🌐</Text>
              <Text style={styles.contactText}>www.architetando.com.br</Text>
            </TouchableOpacity>

            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>🏛️</Text>
              <Text style={styles.contactText}>
                Centro Histórico de Santos/SP
              </Text>
            </View>
          </View>
        </View>

        {/* Parceria */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Parcerias</Text>
          <View style={styles.card}>
            <Text style={styles.text}>
              Trabalhamos em parceria com a <Text style={styles.boldText}>UNIMONTE</Text>{' '}
              na produção de conteúdo educativo sobre arquitetura e história de Santos.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;

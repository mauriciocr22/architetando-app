import React from 'react';
import { View, Text, ScrollView, Platform, Linking, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const address = 'Praça Visc. de Mauá, 29 - sala 422 - Centro, Santos - SP, 11010-000';

  // Abre endereço no Google Maps
  const openInMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${location.latitude},${location.longitude}(Architetando)`,
      android: `geo:0,0?q=${location.latitude},${location.longitude}(Architetando)`,
      default: `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`,
    });
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

          {/* Mapa - Google Maps API */}
          <View style={styles.mapContainer}>
            {Platform.OS === 'web' ? (
              // Fallback para web usando iframe do Google Maps
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.latitude},${location.longitude}&zoom=16`}
                allowFullScreen
              />
            ) : (
              // MapView nativo para iOS/Android
              <MapView
                style={styles.map}
                initialRegion={location}
              >
                <Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  title="Architetando"
                  description={address}
                />
              </MapView>
            )}
          </View>
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

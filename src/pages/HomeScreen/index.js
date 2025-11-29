import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Header";
import WeatherWidget from "../../components/WeatherWidget";
import LogoBranca from "../../../assets/images/logo-branca.svg";
import { styles } from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Architetando" />
      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
          }}
          style={styles.heroBackground}
          resizeMode="cover"
        >
          <View style={styles.heroOverlay}>
            <View style={styles.logoContainer}>
              <LogoBranca width={250} height={80} />
            </View>
            <Text style={styles.heroTitle}>
              Architetando Cursos de Arquitetura
            </Text>
            <Text style={styles.heroSubtitle}>
              Centro Histórico de Santos/SP
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bem-vindo!</Text>
          <Text style={styles.description}>
            A Architetando é uma empresa especializada em cursos de arquitetura,
            com foco em patrimônio histórico, restauração e educação continuada
            para profissionais da área.{"\n\n"}
            Localizada no coração do Centro Histórico de Santos, oferecemos
            conteúdo educativo de qualidade sobre história da arquitetura,
            técnicas de conservação e características geográficas que moldaram
            nossa cidade.{"\n\n"}
            Nossos cursos abordam temas como restauração de edifícios
            históricos, conservação de patrimônio, adaptação de estruturas
            antigas e muito mais.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore</Text>
          <View style={styles.cardsContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Cursos")}
            >
              <Text style={styles.cardIcon}>📚</Text>
              <Text style={styles.cardTitle}>Cursos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Videos")}
            >
              <Text style={styles.cardIcon}>▶️</Text>
              <Text style={styles.cardTitle}>Vídeos Educativos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Gallery")}
            >
              <Text style={styles.cardIcon}>🖼️</Text>
              <Text style={styles.cardTitle}>Galeria de Obras</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("About")}
            >
              <Text style={styles.cardIcon}>ℹ️</Text>
              <Text style={styles.cardTitle}>Sobre Nós</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.widgetContainer}>
          <Text style={styles.widgetTitle}>
            Como está o clima em Santos/SP?
          </Text>
          <WeatherWidget />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

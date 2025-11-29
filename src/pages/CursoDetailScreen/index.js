import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { getCursoById } from '../../services/cursosData';
import { styles } from './styles';

const CursoDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { cursoId } = route.params;
  const curso = getCursoById(cursoId);

  if (!curso) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Curso não encontrado" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Curso não encontrado</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleInscricao = () => {
    Linking.openURL('https://www.architetando.com.br');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Detalhes do Curso" />
      <ScrollView style={styles.scrollContent} contentContainerStyle={{paddingBottom: 80}}>
        <Image
          source={curso.imagem}
          style={styles.cursoImage}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          <View style={styles.categoriaContainer}>
            <Text style={styles.categoria}>{curso.categoria}</Text>
          </View>

          <Text style={styles.titulo}>{curso.titulo}</Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>⏱️</Text>
              <Text style={styles.infoLabel}>Duração</Text>
              <Text style={styles.infoValue}>{curso.cargaHoraria}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📚</Text>
              <Text style={styles.infoLabel}>Nível</Text>
              <Text style={styles.infoValue}>{curso.nivel}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>💻</Text>
              <Text style={styles.infoLabel}>Formato</Text>
              <Text style={styles.infoValue}>{curso.formato}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre o Curso</Text>
            <Text style={styles.descricao}>{curso.descricaoCompleta}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>O que você vai aprender</Text>
            {curso.oquevocevaaprender.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>✓</Text>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conteúdo Programático</Text>
            {curso.conteudoProgramatico.map((modulo, index) => (
              <View key={index} style={styles.moduloContainer}>
                <Text style={styles.moduloTitulo}>
                  {modulo.modulo}: {modulo.titulo}
                </Text>
                {modulo.topicos.map((topico, topicoIndex) => (
                  <View key={topicoIndex} style={styles.topicoItem}>
                    <Text style={styles.topicoBullet}>•</Text>
                    <Text style={styles.topicoText}>{topico}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pré-requisitos</Text>
            {curso.prerequisitos.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Diferenciais</Text>
            {curso.diferenciais.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>⭐</Text>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Instrutor</Text>
            <Text style={styles.descricao}>{curso.instrutor}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certificado</Text>
            <Text style={styles.descricao}>{curso.certificado}</Text>
          </View>

          <TouchableOpacity
            style={styles.inscricaoButton}
            onPress={handleInscricao}
            activeOpacity={0.8}
          >
            <Text style={styles.inscricaoButtonText}>Inscreva-se Agora</Text>
          </TouchableOpacity>

          <Text style={styles.precoInfo}>
            Investimento: {curso.preco}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CursoDetailScreen;

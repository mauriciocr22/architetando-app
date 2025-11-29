import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { getCursos } from '../../services/cursosData';
import { styles } from './styles';

const CursosScreen = () => {
  const navigation = useNavigation();
  const cursos = getCursos();

  const handleCursoPress = (curso) => {
    navigation.navigate('CursoDetail', { cursoId: curso.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cursos" />
      <ScrollView style={styles.scrollContent} contentContainerStyle={{paddingBottom: 80}}>
        <Text style={styles.title}>Nossos Cursos</Text>
        <Text style={styles.subtitle}>
          Aprimore seus conhecimentos em arquitetura e patrimônio histórico com
          nossos cursos especializados.
        </Text>

        {cursos.map((curso) => (
          <TouchableOpacity
            key={curso.id}
            style={styles.cursoCard}
            onPress={() => handleCursoPress(curso)}
            activeOpacity={0.8}
          >
            <Image
              source={curso.imagem}
              style={styles.cursoImage}
              resizeMode="cover"
            />
            <View style={styles.cursoInfo}>
              <View style={styles.categoriaContainer}>
                <Text style={styles.categoria}>{curso.categoria}</Text>
              </View>
              <Text style={styles.cursoTitulo}>{curso.titulo}</Text>
              <Text style={styles.cursoDescricao} numberOfLines={2}>
                {curso.descricaoCurta}
              </Text>
              <View style={styles.detailsRow}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>⏱️</Text>
                  <Text style={styles.detailText}>{curso.duracao}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>📚</Text>
                  <Text style={styles.detailText}>{curso.nivel}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>💻</Text>
                  <Text style={styles.detailText}>{curso.formato}</Text>
                </View>
              </View>
              <View style={styles.verMaisContainer}>
                <Text style={styles.verMaisText}>Ver detalhes →</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CursosScreen;

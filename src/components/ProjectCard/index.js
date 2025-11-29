import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';
import * as Sharing from 'expo-sharing';
import { styles } from './styles';

const ProjectCard = ({ project, isFavorite, onToggleFavorite }) => {
  const hasMultipleImages = project.images.length > 1;
  const [loadingPDF, setLoadingPDF] = useState(false);

  const handleOpenPDF = async () => {
    if (!project.pdfAsset) return;

    try {
      setLoadingPDF(true);

      const asset = Asset.fromModule(project.pdfAsset);
      await asset.downloadAsync();

      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(asset.localUri, {
          mimeType: 'application/pdf',
          dialogTitle: `PDF - ${project.name}`,
          UTI: 'com.adobe.pdf',
        });
      } else {
        Alert.alert(
          'Não disponível',
          'Este dispositivo não suporta visualização de PDFs.'
        );
      }
    } catch (error) {
      console.error('Erro ao abrir PDF:', error);
      Alert.alert(
        'Erro',
        'Não foi possível abrir o PDF. Tente novamente.'
      );
    } finally {
      setLoadingPDF(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.projectName}>{project.name}</Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => onToggleFavorite(project.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '⭐' : '☆'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={hasMultipleImages ? styles.imagesRow : styles.imagesSingle}>
        {project.images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={hasMultipleImages ? styles.imageHalf : styles.imageFull}
            resizeMode="cover"
          />
        ))}
      </View>

      {project.pdfAsset && (
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={handleOpenPDF}
            activeOpacity={0.7}
            disabled={loadingPDF}
          >
            {loadingPDF ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#0066CC" />
                <Text style={styles.loadingText}>Abrindo PDF...</Text>
              </View>
            ) : (
              <Text style={styles.pdfLink}>📄 Baixar PDF da obra</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProjectCard;

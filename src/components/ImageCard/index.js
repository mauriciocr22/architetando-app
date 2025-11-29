import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ImageCard = ({ image, isFavorite, onToggleFavorite }) => {
  const imageSource = image.type === 'local'
    ? image.source
    : { uri: image.thumbnail || image.url };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => onToggleFavorite(image.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '⭐' : '☆'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description} numberOfLines={2}>
          {image.description}
        </Text>
        <Text style={styles.photographer} numberOfLines={1}>
          {image.photographer}
        </Text>
      </View>
    </View>
  );
};

export default ImageCard;

import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles';

const VideoCard = ({ video, isFavorite, onToggleFavorite }) => {
  const handleOpenVideo = () => {
    Linking.openURL(video.url);
  };

  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.thumbnailContainer}
        onPress={handleOpenVideo}
        activeOpacity={0.8}
      >
        <Image
          source={{ uri: video.thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <View style={styles.playButton}>
          <Text style={styles.playText}>▶</Text>
        </View>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => onToggleFavorite(video.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '⭐' : '☆'}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.description}>
          {truncateDescription(video.description)}
        </Text>
        {video.viewCount && (
          <Text style={styles.stats}>
            {parseInt(video.viewCount).toLocaleString()} visualizações
          </Text>
        )}
      </View>
    </View>
  );
};

export default VideoCard;

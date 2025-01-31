import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Podcast } from '../../models/PodcastModel';

interface PodcastItemProps {
  podcast: Podcast;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: podcast.thumbnailUrl || '' }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Image source={{ uri: podcast.user.avatarUrl || '' }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{podcast.title}</Text>
          <Text style={styles.subtitle}>
            {podcast.user.username} · {podcast.views} views · {podcast.createdDay}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default PodcastItem;

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DMNews1} from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';

export default function NewsItem({title, body, date, image}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperNews}>
        <View>
          <Text style={styles.headingNews}>{title}</Text>
          <Text style={styles.dateNews}>{date}</Text>
        </View>
        <Image source={{uri: image}} style={styles.imgNews} />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  wrapperNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 16,
    alignItems: 'center',
  },
  headingNews: {
    maxWidth: 177,
    marginBottom: 2,
    fontFamily: fonts.primary[600],
    fontSize: 16,
  },
  dateNews: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  imgNews: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  divider: {
    flex: 1,
    height: 1.5,
    backgroundColor: colors.divider,
    marginHorizontal: -16,
  },
});

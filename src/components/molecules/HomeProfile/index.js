import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DMUser} from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={DMUser} />
      <View>
        <Text style={styles.nameUser}>Novi Dwi Cahya</Text>
        <Text style={styles.profession}>Expert React Developer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 66 / 2,
    marginRight: 12,
  },
  nameUser: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
  },
});

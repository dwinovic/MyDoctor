import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICrateStarFilled, ICrateStartUnfilled} from '../../../assets';
import {DMDoctor1} from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';

export default function DoctorRated({onPress, image, name, category}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.avatar} />
      <View style={styles.doctor}>
        <Text style={styles.doctorName}>{name}</Text>
        <Text style={styles.doctorType}>{category}</Text>
      </View>
      <View style={styles.rated}>
        <ICrateStarFilled />
        <ICrateStarFilled />
        <ICrateStarFilled />
        <ICrateStarFilled />
        <ICrateStartUnfilled />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  rated: {
    flexDirection: 'row',
  },
  doctor: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    marginBottom: 2,
    color: colors.text.primary,
  },
  doctorType: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DMHospital1} from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';

export default function ListHospital() {
  return (
    <View style={styles.container}>
      <Image source={DMHospital1} style={styles.imgHotel} />
      <View style={styles.wrapperDesc}>
        <Text style={styles.HospitalName}>Rumah Sakit Dr. Soedono</Text>
        <Text style={styles.addrs}>Jn. Dr. Sutomo No.59</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imgHotel: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  HospitalName: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: 91,
    marginBottom: 4,
  },
  addrs: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function ListHospital({type, name, addr, pic}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHospital}>
        <Image source={pic} style={styles.imgHotel} />
        <View style={styles.wrapperDesc}>
          <Text style={styles.HospitalName}>{type}</Text>
          <Text style={styles}>{name}</Text>
          <Text style={styles.addrs}>{addr}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperHospital: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
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
  },
  addrs: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  divider: {
    height: 1.5,
    flex: 1,
    marginHorizontal: -16,
    backgroundColor: colors.divider,
  },
});

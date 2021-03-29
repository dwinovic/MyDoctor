import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DMBGHospitals} from '../../assets/dummy';
import {ListHospitals} from '../../components';
import {colors, fonts} from '../../utils';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={DMBGHospitals} style={styles.background}>
        <Text style={styles.heading}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals />
        <ListHospitals />
        <ListHospitals />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    width: 425,
    height: 240,
    paddingTop: 30,
  },
  heading: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
});

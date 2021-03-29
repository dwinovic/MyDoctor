import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICDoctorCategoryUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorCategory() {
  return (
    <View style={styles.card}>
      <ICDoctorCategoryUmum style={styles.icon} />
      <Text style={styles.cardText}>Saya butuh</Text>
      <Text style={styles.category}>dokter Umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
  },
  icon: {
    marginBottom: 28,
  },
  cardText: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
  },
  category: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
});

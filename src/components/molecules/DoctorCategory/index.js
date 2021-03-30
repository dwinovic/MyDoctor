import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDoctorCategoryAnak,
  ICDoctorCategoryObat,
  ICDoctorCategoryPsikiater,
  ICDoctorCategoryUmum,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorCategory({category, onPress}) {
  const ILCategory = () => {
    if (category === 'dokter umum') {
      return <ICDoctorCategoryUmum style={styles.icon} />;
    }
    if (category === 'psikiater') {
      return <ICDoctorCategoryPsikiater style={styles.icon} />;
    }
    if (category === 'dokter anak') {
      return <ICDoctorCategoryAnak style={styles.icon} />;
    }
    if (category === 'dokter obat') {
      return <ICDoctorCategoryObat style={styles.icon} />;
    }

    return <ICDoctorCategoryUmum style={styles.icon} />;
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ILCategory />
      <Text style={styles.cardText}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
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

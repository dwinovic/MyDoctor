import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DoctorCategory, Gap, HomeProfile, NewsItem} from '../../components';
import DoctorRated from '../../components/molecules/DoctorRated';
import {colors, fonts} from '../../utils';

export default function Doctor() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <HomeProfile />
          <Text style={styles.heading}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.categories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Gap width={16} />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </ScrollView>
          </View>
          <Text style={styles.labelSection}>Dokter Pilihan</Text>
          <DoctorRated />
          <DoctorRated />
          <DoctorRated />
          <Text style={styles.labelSection}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={16} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.white,
  },
  heading: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 210,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  labelSection: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginBottom: 14,
    paddingHorizontal: 16,
  },
});

import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DMBGHospitals,
  DMHospital1,
  DMHospital2,
  DMHospital3,
} from '../../assets/dummy';
import {Gap, ListHospitals} from '../../components';
import {colors, fonts} from '../../utils';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={DMBGHospitals} style={styles.background}>
        <Text style={styles.heading}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <ListHospitals
            type="Rumah Sakit"
            name="Dr. Soedono"
            pic={DMHospital1}
            addr="Jl. Dr. Sutomo No. 59"
          />
          <ListHospitals
            type="Rumah Sakit"
            name="Islam Siti Aisyah Madiun"
            pic={DMHospital2}
            addr="Jl. Dr. Sutomo No. 59"
          />
          <ListHospitals
            type="Rumah Sakit"
            name=" Tingkatan Paling Atas"
            pic={DMHospital3}
            addr="Jl. Dr. Sutomo No. 59"
          />
        </ScrollView>
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
    paddingHorizontal: -16,
  },
});

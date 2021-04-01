import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DMDoctor2} from '../../assets';
import {Button, Gap, Header, List, Profile} from '../../components';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View>
          <Profile
            username="Nairobi Putri Hayza"
            desc="Dokter Anak"
            editIcon="male"
            pic={DMDoctor2}
          />
          <Gap height={26} />
          <List onlyText name="Alumnus" desc="Universitas Indonesia, 2004" />
          <Gap height={16} />
          <List
            onlyText
            name="Tempat Praktik"
            desc="Rumah Sakit Dr. Soedono, Madiun"
          />
          <Gap height={16} />
          <List onlyText name="No. STR" desc="0000116622081996" />
        </View>
        <View>
          <Button title="Start Consultation" />
          <Gap height={40} />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flex: 1,
  },
});

// SLICING PROFILE DOCTOR

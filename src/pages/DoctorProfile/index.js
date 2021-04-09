import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DMDoctor2} from '../../assets';
import {Button, Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View>
          <Profile
            username={dataDoctor.fullName}
            desc={dataDoctor.category}
            editIcon={dataDoctor.gender}
            pic={{uri: dataDoctor.photo}}
          />
          <Gap height={26} />
          <List onlyText name="Alumnus" desc={dataDoctor.university} />
          <Gap height={16} />
          <List
            onlyText
            name="Tempat Praktik"
            desc={dataDoctor.hospital_address}
          />
          <Gap height={16} />
          <List onlyText name="No. STR" desc={dataDoctor.str_number} />
        </View>
        <View>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Chatting')}
          />
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
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flex: 1,
  },
});

// SLICING PROFILE DOCTOR

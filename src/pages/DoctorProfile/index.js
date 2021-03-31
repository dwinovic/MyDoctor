import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Header, List, Profile} from '../../components';

const DoctorProfile = () => {
  return (
    <View>
      <Header title="Profile" />
      <Profile
        username="Nairobi Putri Hayza"
        desc="Dokter Anak"
        editIcon="add"
      />
      <List type="alumnus" name="Universitas Indonesia, 2004" />
      <Button title="Start Consultation" />
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({});

// SLICING PROFILE DOCTOR

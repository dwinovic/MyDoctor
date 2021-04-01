import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DMUser} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {Header, Profile} from '../../components/molecules';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile editIcon="remove" pic={DMUser} />
          <Gap height={26} />
          <Input label="Full Name" placeholder="Novi Dwi Cahya" />
          <Gap height={24} />
          <Input label="Profession" placeholder="React Developer" />
          <Gap height={24} />
          <Input label="Email Address" placeholder="novi@dwi.com" />
          <Gap height={24} />
          <Input label="Password" placeholder="*****" />
        </View>
        <Gap height={40} />
        <Button title="Save profile" onPress={() => alert('Success')} />
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginHorizontal: -40,
    marginBottom: 10,
  },
});

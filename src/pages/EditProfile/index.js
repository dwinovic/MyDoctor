import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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
          <Profile editIcon="remove" />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Profession" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
        </View>
        <Gap height={40} />
        <Button title="Save profile" />
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginHorizontal: -40,
    marginBottom: 10,
  },
});

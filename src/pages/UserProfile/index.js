import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
      </View>
      <Gap height={10} />
      <Profile username="Novi Dwi Cahya" desc="Product Designer" />
      <Gap height={34} />
      <List
        name="Edit Profile"
        desc="Last update yesterday"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List name="Language" desc="Available 12 languages" icon="language" />
      <List name="Give Us Rate" desc="On Google Play Store" icon="rated" />
      <List name="Help Center" desc="Read our guidelines" icon="help-center" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  header: {
    marginHorizontal: -16,
  },
});

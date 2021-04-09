import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILUserPhotoNull} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, showError} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILUserPhotoNull,
    email: '',
  });

  const [dataProfile, setDataProfile] = useState({});

  useEffect(() => {
    getData('user').then(response => {
      const dataProfile = response;
      dataProfile.photo = {uri: response.photo};
      setDataProfile(dataProfile);
      setProfile(dataProfile);
    });
  }, []);

  const editProfile = () => {
    navigation.navigate('EditProfile', dataProfile);
  };

  const logout = () => {
    Firebase.auth()
      .signOut()
      .then(res => {
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showError(err);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Header
          title="Profile"
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          username={profile.fullName}
          desc={profile.profession}
          pic={profile.photo}
          disabled
        />
      )}
      <Gap height={34} />
      <List
        name="Edit Profile"
        desc="Last update yesterday"
        icon="edit-profile"
        onPress={editProfile}
      />
      <List name="Language" desc="Available 12 languages" icon="language" />
      <List name="Give Us Rate" desc="On Google Play Store" icon="rated" />
      <List name="Logout" icon="help-center" onPress={logout} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginHorizontal: -16,
  },
});

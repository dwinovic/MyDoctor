import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {DMUser, ILUserPhotoNull} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors, getData} from '../../utils';

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
      console.log('get data 2', response);
      const dataProfile = response;
      dataProfile.photo = {uri: dataProfile.photo};
      setDataProfile(dataProfile);
      // data.photo = {uri: response.photo};
      setProfile(dataProfile);
      console.log(dataProfile);
    });
  }, []);

  const editProfile = () => {
    navigation.navigate('EditProfile', dataProfile);
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
      </View>
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          username={profile.fullName}
          desc={profile.profession}
          pic={profile.photo}
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
      <List name="Help Center" desc="Read our guidelines" icon="help-center" />
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

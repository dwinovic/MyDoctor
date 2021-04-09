import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DMUser} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {Header, Loading, Profile} from '../../components/molecules';
import {colors, getData, storeData, useForm} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ILUserPhotoNull} from '../../assets';
import {Firebase} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

const EditProfile = ({navigation, route}) => {
  const {fullName, profession, email, photo, uid} = route.params;

  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [dataProfile, setDataProfile] = useForm({
    fullName: fullName,
    profession: profession,
    email: email,
    photo: photo,
    uid: uid,
  });

  const onChange = (key, value) => {
    setDataProfile([key], value);
  };

  const saveProfile = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password minimal 6 karakter',
          type: 'default',
          backgroundColor: colors.infoAlert,
          color: colors.white,
          animationDuration: 500,
          duration: 3500,
        });
      } else {
        changePassword();
        changeData();
        navigation.replace('UserProfile');
      }
    } else {
      changeData();
      navigation.replace('UserProfile');
    }
  };

  const getImage = () => {
    launchImageLibrary(
      {maxHeight: 200, maxWidth: 200, quality: 0.5},
      response => {
        const image = response;
        image.photo = {uri: image.uri};
        if (image.didCancel || image.error) {
          // setDataProfile('photo', ILUserPhotoNull);
        } else {
          setDataProfile('photo', image);
        }
      },
    );
  };

  const changePassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage({
            message: err,
            type: 'default',
            backgroundColor: colors.infoAlert,
            color: colors.white,
            animationDuration: 500,
            duration: 3500,
          });
        });
      }
    });
  };

  const changeData = () => {
    const data = dataProfile;
    data.photo = dataProfile.photo.uri;
    const photo = {uri: data.photo};
    setDataProfile('photo', photo);
    Firebase.database()
      .ref(`users/${data.uid}/`)
      .update(data)
      .then(response => {
        storeData('user', data);
        showMessage({
          message: 'Data berhasil diperbarui',
          type: 'default',
          backgroundColor: colors.primary,
          color: colors.white,
          animationDuration: 500,
          duration: 3500,
        });
      })
      .catch(err => {
        showMessage({
          message: err,
          type: 'default',
          backgroundColor: colors.infoAlert,
          color: colors.white,
          animationDuration: 500,
          duration: 3500,
        });
      });
  };

  return (
    <>
      <View style={styles.page}>
        <View style={styles.header}>
          <Header
            title="Edit Profile"
            onPress={() => navigation.navigate('UserProfile')}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Profile
              editIcon="remove"
              pic={dataProfile.photo}
              onPress={getImage}
            />
            <Gap height={26} />
            <Input
              label="Full Name"
              value={dataProfile.fullName}
              onChangeText={value => onChange('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Profession"
              value={dataProfile.profession}
              onChangeText={value => onChange('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={dataProfile.email}
              onChangeText={value => onChange('email', value)}
              disable
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={dataProfile.password}
              onChangeText={value => setPassword(value)}
              secureTextEntry
            />
          </View>
          <Gap height={40} />
          <Button title="Save profile" onPress={saveProfile} />
          <Gap height={40} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
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

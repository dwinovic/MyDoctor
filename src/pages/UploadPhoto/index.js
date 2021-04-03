import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ICBtnPhotoAdd, ICBtnPhotoRemove, ILUserPhotoNull} from '../../assets';
import {Button, Gap, Header, Link, Profile} from '../../components';
import {colors, fonts} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function UploadPhoto({navigation}) {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILUserPhotoNull);

  const getImage = () => {
    launchImageLibrary({}, response => {
      if (response.didCancel || response.error) {
        setPhoto(ILUserPhotoNull);
        setHasPhoto(false);
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <View style={styles.avatarWrapper}>
            <TouchableOpacity onPress={getImage}>
              <Profile pic={photo} style={styles.avatar} />
              {/* <Image style={styles.avatar} source={getImage} /> */}
              {hasPhoto && <ICBtnPhotoRemove style={styles.buttonCircle} />}
              {!hasPhoto && <ICBtnPhotoAdd style={styles.buttonCircle} />}
            </TouchableOpacity>
          </View>
          <Text style={styles.nameUser}>Novi Dwi Cahya</Text>
          <Text style={styles.profession}>React Native Developer</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button disable={!hasPhoto} title="Upload and Continue" />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  buttonCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  buttonWrapper: {
    marginBottom: 64,
  },
  nameUser: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 19,
    marginBottom: 4,
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});

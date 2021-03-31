import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DMUser, ICBtnPhotoAdd, ICBtnPhotoRemove} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({username, desc, editIcon}) => {
  const EditProfile = () => {
    if (editIcon === 'add') {
      return <ICBtnPhotoAdd style={styles.editIcon} />;
    }
    if (editIcon === 'remove') {
      return <ICBtnPhotoRemove style={styles.editIcon} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={DMUser} style={styles.avatar} />
        <EditProfile />
      </View>
      {username && (
        <View>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderColor: colors.divider,
    borderWidth: 1,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    marginTop: 5,
  },
  editIcon: {
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
});

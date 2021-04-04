import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {ILUserPhotoNull} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

export default function HomeProfile({onPress}) {
  const [user, setUser] = useState({
    fullName: '',
    profession: '',
    photo: ILUserPhotoNull,
  });

  useEffect(() => {
    getData('user').then(res => {
      // console.log('get data local:', res);
      // const data = res;
      // const objectPhoto = JSON.parse(res.photo);

      // console.log('objectPhoto:', objectPhoto);
      console.log('get data local:', res);
      setUser(res);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.avatar} source={user.photo} />
      <View>
        <Text style={styles.nameUser}>{user.fullName}</Text>
        <Text style={styles.profession}>{user.profession}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 66 / 2,
    marginRight: 12,
  },
  nameUser: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    textTransform: 'capitalize',

    color: colors.text.secondary,
  },
});

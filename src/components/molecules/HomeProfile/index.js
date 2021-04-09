import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILUserPhotoNull} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

export default function HomeProfile({onPress, route}) {
  // const {fullName, email, photo, profession, uid} = route.params;
  // const data = route.params;
  // console.log(data);

  const [user, setUser] = useState({
    fullName: '',
    profession: '',
    photo: ILUserPhotoNull,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setUser(data);
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

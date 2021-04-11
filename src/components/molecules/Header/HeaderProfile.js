import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DMDoctor3} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const HeaderProfile = ({onPress, title, subtitle, type, image}) => {
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark-profile' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <View style={styles.wrapperTitle}>
        <Text style={styles.title(type)}>{title}</Text>
        <Text style={styles.subtitle(type)}>{subtitle}</Text>
      </View>
      <Image source={image} style={styles.avatar} />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: type === 'dark-profile' ? colors.secondary : colors.white,
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark-profile' ? 20 : 0,
    borderBottomRightRadius: type === 'dark-profile' ? 20 : 0,
    marginHorizontal: -16,
  }),
  title: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark-profile' ? colors.white : colors.text.primary,
  }),
  subtitle: type => ({
    textAlign: 'center',
    color:
      type === 'dark-profile' ? colors.text.secondary : colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    textTransform: 'capitalize',
  }),
  wrapperTitle: {
    flex: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});

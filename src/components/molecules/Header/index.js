import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
import HeaderProfile from './HeaderProfile';

export default function Header({onPress, title, type, subtitle}) {
  if (type === 'dark-profile') {
    return (
      <HeaderProfile
        onPress={onPress}
        type={type}
        title={title}
        subtitle={subtitle}
      />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    // marginHorizontal: -16,
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});

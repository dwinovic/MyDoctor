import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const OnlyText = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.divider} />
    </View>
  );
};

export default OnlyText;

const styles = StyleSheet.create({
  container: {},
  divider: {
    height: 1.5,
    backgroundColor: colors.divider,
    width: '200%',
    marginHorizontal: -16,
    marginTop: 16,
  },
  name: {
    marginBottom: 6,
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
  },
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
});

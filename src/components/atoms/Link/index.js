import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Link({title, align, size, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(align, size)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (align, size) => ({
    textAlign: align,
    fontSize: size,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary[400],
  }),
});

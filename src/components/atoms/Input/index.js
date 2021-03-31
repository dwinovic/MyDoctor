import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Input({label, disable}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(disable)}
        placeholder="Tulis pesan untuk dr. Nairobi"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
  input: disable => ({
    borderWidth: 1,
    borderRadius: 10,
    // marginTop: 6,
    height: 45,
    borderColor: colors.border,
    backgroundColor: disable ? colors.disable : null,
    padding: 13,
    fontFamily: fonts.primary[400],
  }),
});

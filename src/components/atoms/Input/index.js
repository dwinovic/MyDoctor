import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Input({
  label,
  disable,
  flex,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) {
  const [border, setBorder] = useState(colors.border);

  const WhenFocus = () => {
    setBorder(colors.primary);
  };

  const WhenBlur = () => {
    setBorder(colors.border);
  };

  return (
    <View style={styles.container(flex)}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(disable, border)}
        placeholder={placeholder}
        onFocus={WhenFocus}
        onBlur={WhenBlur}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: flex => ({
    flex: flex ? 1 : null,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginBottom: 6,
  },
  input: (disable, border) => ({
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    borderColor: border,
    backgroundColor: disable ? colors.disable : null,
    padding: 13,
    fontFamily: fonts.primary[400],
  }),
});

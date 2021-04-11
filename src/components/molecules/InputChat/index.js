import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap, Input} from '../../atoms';

export default function InputChat({placeholder, value, onChangeText, onPress}) {
  return (
    <View style={styles.inputArea}>
      <Input
        flex={1}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        disable={false}
        editable={true}
      />
      <Gap width={10} />
      <Button disable={value.length < 1} type="icon-send" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    maxHeight: 45,
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: -16,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
});

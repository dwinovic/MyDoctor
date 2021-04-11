import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICSend, ICSendDisable} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({icon, onPress, disable}) => {
  if (disable) {
    return (
      <View>
        <ICSendDisable />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <ICSend />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({});

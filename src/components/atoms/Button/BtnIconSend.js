import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICSend, ICSendDisable} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'icon-sendActive') {
      return <ICSend />;
    }
    if (icon === 'icon-sendDisable') {
      return <ICSendDisable />;
    }

    return <ICSend />;
  };

  return (
    <TouchableOpacity style={styles.container(icon)} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: icon => ({
    backgroundColor: icon === 'icon-sendActive' ? 'blue' : colors.disable,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom: icon === 'icon-sendActive' ? 5 : null,
    paddingLeft: icon === 'icon-sendActive' ? 3 : null,
  }),
});

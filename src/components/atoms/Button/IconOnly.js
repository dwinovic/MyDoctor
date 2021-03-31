import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ICBackDark, ICBackLight} from '../../../assets';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBackDark />;
    }
    if (icon === 'back-light') {
      return <ICBackLight />;
    }

    return <ICBackDark />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

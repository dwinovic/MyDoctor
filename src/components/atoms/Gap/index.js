import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Gap({height, width, bgcolor}) {
  return (
    // <View style={{height: height, width: width}} />
    <View style={styles.gap(height, width, bgcolor)} />
  );
}

const styles = StyleSheet.create({
  gap: (height, width, bgcolor) => ({
    height: height,
    width: width,
    backgroundColor: bgcolor,
  }),
});

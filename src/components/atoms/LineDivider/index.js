import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fonts} from '../../../utils';

export default function LineDivider({height, width, color, flex}) {
  return <View style={styles.divider(height, width, color, flex)} />;
}

const styles = StyleSheet.create({
  divider: (height, width, color, flex) => ({
    height: height,
    width: width,
    color: color === 'grey' ? fonts.divider : 'white',
    flex: flex === 1 ? 1 : 'white',
  }),
});

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCallTax} from '../../assets';
import {colors, fonts} from '../../utils';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });

  return (
    <View style={styles.pages}>
      <ILCallTax />
      <Text style={styles.text}>Call Tax</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 20,
  },
});

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILcallTax} from '../../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });

  return (
    <View style={styles.pages}>
      <ILcallTax />
      <Text style={styles.text}>Call Tax</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#112340',
    marginTop: 20,
  },
});

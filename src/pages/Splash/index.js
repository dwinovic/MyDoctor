import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILMyDoctor} from '../../assets';
import {colors, fonts} from '../../utils';
import {Firebase} from '../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 1000);
  });

  return (
    <View style={styles.pages}>
      <ILMyDoctor />
      <Text style={styles.text}>My Doctor</Text>
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

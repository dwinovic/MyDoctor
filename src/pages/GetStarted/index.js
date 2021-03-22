import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILcallTax} from '../../assets';
import {ILBg} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBg} style={styles.bg}>
      <View style={styles.pages}>
        <View>
          <ILcallTax />
          <Text style={styles.text}>
            Maintain Your Business's Profitability With Us
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Register')}
          />
          <Gap height={16} />
          <Button
            type="secondary"
            title="Sign In"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  pages: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 28,
    marginTop: 54,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
  },
  spacing: {
    height: 16,
  },
  bg: {
    flex: 1,
  },
});

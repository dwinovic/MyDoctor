import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILMyDoctor} from '../../assets';
import {ILBg} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBg} style={styles.bg}>
      <View style={styles.pages}>
        <View>
          <ILMyDoctor />
          <Text style={styles.text}>
            Konsultasi dengan dokter jadi lebih mudah & fleksibel
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
            onPress={() => navigation.navigate('SignIn')}
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
    fontFamily: fonts.primary[600],
    color: colors.text.white,
  },
  spacing: {
    height: 16,
  },
  bg: {
    flex: 1,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, fonts} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Register Now" />
      <View style={styles.content}>
        <View>
          <Input label="Full Name" placeholder="Your name" />
          <Gap height={24} />
          <Input label="Profession" placeholder="Your Profession" />
          <Gap height={24} />
          <Input label="Email Address" placeholder="youremail@gmail.com" />
          <Gap height={24} />
          <Input label="Password" placeholder="Your password" />
          <Gap height={40} />
        </View>
        <Button
          title="Contiue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    maxWidth: 220,
    marginVertical: 40,
    fontFamily: fonts.primary[600],
  },
});

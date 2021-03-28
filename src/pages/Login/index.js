import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCallTax} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <ILCallTax />
        <Text style={styles.heading}>Login and Started Consultation Now</Text>
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={10} />
        <Link size={12} title="Forgot My Password" />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Sign In"
          onPress={() => navigation.navigate('MainApp')}
        />
        <Gap height={30} />
        <Link size={16} title="Create New Account" align="center" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
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

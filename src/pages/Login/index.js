import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILMyDoctor} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {colors, fonts, storeData, useForm} from '../../utils';
import {Firebase} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

export default function SignIn({navigation}) {
  const [login, setLogin] = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  // console.log('data login', login);

  const signinData = () => {
    console.log('sign in:', login);
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then(response => {
        console.log('sukses login:', response);
        setLoading(false);
        Firebase.database()
          .ref(`users/${response.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user:', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
            }
          });
        navigation.replace('MainApp');
      })
      .catch(error => {
        const errorMessage = error;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.infoAlert,
          color: colors.white,
          animationDuration: 500,
          duration: 3500,
        });
        console.log('error login:', error);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Gap height={40} />
            <View>
              <ILMyDoctor />
              <Text style={styles.heading}>
                Login and Started Consultation Now
              </Text>
              <Input
                label="Email"
                placeholder="youremail@gmail.com"
                value={login.email}
                onChangeText={value => setLogin('email', value)}
              />
              <Gap height={24} />
              <Input
                label="Password"
                placeholder="your password"
                value={login.password}
                onChangeText={value => setLogin('password', value)}
                secureTextEntry
              />
              <Gap height={10} />
              <Link size={12} title="Forgot My Password" />
            </View>
            <Gap height={80} />
            <View>
              <Button
                style={styles.button}
                title="Sign In"
                onPress={signinData}
              />
              <Gap height={30} />
              <Link
                size={16}
                title="Create New Account"
                align="center"
                onPress={() => navigation.replace('MainApp')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 0,
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    maxWidth: 220,
    marginVertical: 40,
    fontFamily: fonts.primary[600],
  },
});

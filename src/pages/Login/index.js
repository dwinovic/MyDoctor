import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {ILMyDoctor} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';

export default function SignIn({navigation}) {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const setLoading = value => {
    dispatch({type: 'SET_LOADING', value: value});
  };

  const signIn = () => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(response => {
        setLoading(false);
        Firebase.database()
          .ref(`users/${response.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        setLoading(false);
        showError(error.message);
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
                value={form.email}
                onChangeText={value => setForm('email', value)}
              />
              <Gap height={24} />
              <Input
                label="Password"
                placeholder="your password"
                value={form.password}
                onChangeText={value => setForm('password', value)}
                secureTextEntry
              />
              <Gap height={10} />
              <Link size={12} title="Forgot My Password" />
            </View>
            <Gap height={80} />
            <View>
              <Button style={styles.button} title="Sign In" onPress={signIn} />
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

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Input} from '../../components';
import {colors, fonts, useForm} from '../../utils';
// import {Fire} from '../../config';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [profession, setProfession] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);

    // Fire.auth()
    //   .createUserWithEmailAndPassword(form.email, form.password)
    //   .then(userCredential => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log('Success', user);
    //     // ...
    //   })
    //   .catch(error => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log('error register', errorMessage);
    //     // ..
    //   });

    // () => navigation.navigate('UploadPhoto')
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Register Now" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View>
            <Input
              label="Full Name"
              placeholder="Your full name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Profession"
              placeholder="Your Profession"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              placeholder="youremail@gmail.com"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              placeholder="Your password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={60} />
          </View>
          <Button title="Contiue" onPress={onContinue} />
        </View>
      </ScrollView>
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

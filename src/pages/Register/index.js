import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData, storeData, useForm} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  //useState cara lama
  // const [fullName, setFullName] = useState('');
  // const [profession, setProfession] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  //useState best practice
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log('sedang mengirim', form);
    // console.log(data);

    // Get data from local storage
    // getData('user').then(res => {
    //   console.log('respon: ', res);
    // });

    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');

        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };

        Firebase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);

        console.log('success terkirim :', success);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        setLoading(false);
        // setForm('reset');
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.infoAlert,
          color: colors.white,
          animationDuration: 500,
          duration: 3500,
        });
        console.log('error register: ', errorMessage);
      });
  };

  return (
    <>
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
      {loading && <Loading />}
    </>
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

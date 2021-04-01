import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DMDoctor1, DMDoctor2, DMDoctor3} from '../../assets/dummy';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

export default function Message({navigation}) {
  const [doctors, setDoctors] = useState([
    {
      id: '1',
      profile: DMDoctor1,
      name: 'Nairobi Putri Hayza',
      desc: 'Baik ibu, terima kasih atas informasinya...',
    },
    {
      id: '2',
      profile: DMDoctor2,
      name: 'Liu Yue Tian Park',
      desc: 'Oh tentu saja tidak karena...',
    },
    {
      id: '3',
      profile: DMDoctor3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.heading}>Message</Text>
        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  heading: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginBottom: 16,
  },
});

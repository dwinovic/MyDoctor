import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {Firebase} from '../../config';

export default function ChooseDoctor({navigation, route}) {
  const doctorCategory = route.params;
  const [dataDoctor, setDataDoctor] = useState([]);

  useEffect(() => {
    callDoctorByCategory(doctorCategory.category);
  }, [doctorCategory.category]);

  const callDoctorByCategory = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldValue = res.val();
          const data = [];
          Object.keys(oldValue).map(item =>
            data.push({
              id: item,
              data: oldValue[item],
            }),
          );
          setDataDoctor(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${doctorCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapperDoctor}>
        {dataDoctor.map(doctor => {
          return (
            <List
              key={doctor.id}
              name={doctor.data.fullName}
              profile={{uri: doctor.data.photo}}
              desc={doctor.data.gender}
              type="next"
              onPress={() => navigation.navigate('DoctorProfile', doctor.data)}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapperDoctor: {
    marginHorizontal: 16,
    marginVertical: 20,
    flex: 1,
  },
});

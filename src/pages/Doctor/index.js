import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DoctorCategory, Gap, HomeProfile, NewsItem} from '../../components';
import DoctorRated from '../../components/molecules/DoctorRated';
import {Firebase} from '../../config';
import {colors, fonts, showError} from '../../utils';

export default function Doctor({navigation}) {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [ratedDoctor, setRatedDoctor] = useState([]);

  useEffect(() => {
    getNews();
    getRatedDoctor();
    getCategoryDoctor();
  }, []);

  const getNews = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then(resDB => {
        if (resDB.val()) {
          const data = resDB.val();
          const filterData = data.filter(el => el !== null);
          setNews(filterData);
        }
      });
  };

  const getCategoryDoctor = () => {
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then(resDB => {
        if (resDB.val()) {
          setCategoryDoctor(resDB.val());
        }
      });
  };

  const getRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldValue = res.val();
          const data = [];
          Object.keys(oldValue).map(key => {
            data.push({
              id: key,
              data: oldValue[key],
            });
          });
          setRatedDoctor(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Text style={styles.heading}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.categories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Gap width={16} />
              {categoryDoctor.map(item => {
                return (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => navigation.navigate('ChooseDoctor', item)}
                  />
                );
              })}
              <Gap width={6} />
            </ScrollView>
          </View>
          <Text style={styles.labelSection}>Dokter Pilihan</Text>
          {ratedDoctor.map(doctor => {
            return (
              <DoctorRated
                key={doctor.id}
                name={doctor.data.fullName}
                image={doctor.data.photo}
                category={doctor.data.category}
                onPress={() =>
                  navigation.navigate('DoctorProfile', doctor.data)
                }
              />
            );
          })}
          <Text style={styles.labelSection}>Good News</Text>
          {news.map(item => (
            <NewsItem
              key={item.id}
              title={item.title}
              image={item.image}
              date={item.date}
            />
          ))}
          <Gap height={16} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.white,
  },
  heading: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 210,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  labelSection: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginBottom: 14,
    paddingHorizontal: 16,
  },
});

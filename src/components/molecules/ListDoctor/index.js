import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DMDoctor1} from '../../../assets/dummy';
import {colors} from '../../../utils';

export default function ListDoctor() {
  return (
    <View style={styles.MainWrapper}>
      <View style={styles.container}>
        <Image source={DMDoctor1} style={styles.avatar} />
        <View style={styles.wrappMessage}>
          <Text style={styles.doctorName}>dr. Dwinovic </Text>
          <Text style={styles.desc}>
            Baik ibu, terima kasih atas informasinya..
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  MainWrapper: {
    marginBottom: 16,
  },
  container: {
    marginBottom: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  divider: {
    height: 1.5,
    backgroundColor: colors.divider,
    marginHorizontal: -16,
  },
});

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListDoctor({profile, name, desc, type, onPress}) {
  return (
    <View style={styles.MainWrapper}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={profile} style={styles.avatar} />
        <View style={styles.wrappMessage}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        {type === 'next' && <ICNext />}
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  MainWrapper: {
    marginBottom: 16,
    // flex: 1,
  },
  container: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  doctorName: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
  wrappMessage: {
    flex: 1,
  },
});

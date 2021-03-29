import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

export default function Message() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.heading}>Message</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
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

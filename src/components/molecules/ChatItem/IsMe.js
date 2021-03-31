import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatWrapper}>
        <Text>Ibu Dokter, apakah kurang tidur buruk bagi kesehatan ?</Text>
      </View>
      <Text style={styles.time}>4.20 PM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end', marginBottom: 16},
  chatWrapper: {
    maxWidth: '70%',
    backgroundColor: colors.ChatItem.isMe,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    padding: 8,
  },
  time: {
    fontSize: 13,
    color: colors.text.secondary,
    marginTop: 6,
  },
});

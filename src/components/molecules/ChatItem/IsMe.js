import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const IsMe = ({text, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatWrapper}>
        <Text>{text}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
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

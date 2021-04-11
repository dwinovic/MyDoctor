import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import IsMe from './IsMe';

const ChatItem = ({isMe, text, time, image}) => {
  if (isMe) {
    return <IsMe text={text} time={time} />;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: image}} />
      <View>
        <View style={styles.chatWrapper}>
          <Text style={styles.desc}>{text}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  chatWrapper: {
    maxWidth: '80%',
    backgroundColor: colors.ChatItem.others,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    padding: 8,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  time: {
    fontSize: 13,
    color: colors.text.secondary,
    marginTop: 6,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 8,
  },
});

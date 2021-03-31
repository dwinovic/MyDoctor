import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Nairobi Putri Hayza"
        type="dark-profile"
        subtitle="Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.date}>Senin, 21 Maret 2020</Text>
      <ChatItem isMe />
      <ChatItem />
      <ChatItem isMe />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
  },
  date: {
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    marginVertical: 20,
    color: colors.text.secondary,
  },
});

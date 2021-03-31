import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, ChatItem, Gap, Header, Input} from '../../components';
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
      <View style={styles.content}>
        <Text style={styles.date}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <View style={styles.inputArea}>
        <Input disable />
        <Gap width={10} />
        <Button icon="icon-sendDisable" type="icon-send" />
      </View>
      <Gap height={30} />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  date: {
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    marginVertical: 20,
    color: colors.text.secondary,
  },
  inputArea: {
    maxHeight: 45,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});

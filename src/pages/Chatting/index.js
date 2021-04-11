import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ChatItem, Gap, Header, InputChat} from '../../components';
import {
  colors,
  fonts,
  getData,
  getDateChat,
  getTimeChat,
  showError,
} from '../../utils';
import {Firebase} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState('');
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();

    const chatId = `${user.uid}_${dataDoctor.uid}`;
    const firebaseUrl = `chatting/${chatId}/allchat/`;
    Firebase.database()
      .ref(firebaseUrl)
      .on('value', snapshoot => {
        if (snapshoot.val()) {
          const dataSnapshoot = snapshoot.val();

          const allDataChat = [];

          Object.keys(dataSnapshoot).map(key => {
            const oldDataChat = dataSnapshoot[key];
            const newDataChat = [];

            Object.keys(oldDataChat).map(item => {
              newDataChat.push({
                id: item,
                data: oldDataChat[item],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  const sendChat = () => {
    const date = new Date();
    const day = date.getDate();
    const monthName = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const month = monthName[date.getMonth()];
    const year = date.getFullYear();
    const chatId = `${user.uid}_${dataDoctor.uid}`;
    const data = {
      sendBy: user.uid,
      chatDate: getDateChat(date),
      chatTime: getTimeChat(date),
      chatContent: chatContent,
    };

    const firebaseUrl = `chatting/${chatId}/allchat/${day} ${month} ${year}`;

    Firebase.database()
      .ref(firebaseUrl)
      .push(data)
      .then(res => {
        setChatContent('');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={dataDoctor.fullName}
        type="dark-profile"
        subtitle={dataDoctor.category}
        onPress={() => navigation.goBack()}
        image={{uri: dataDoctor.photo}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {chatData.map(chat => {
            return (
              <View>
                <Text style={styles.date}>{chat.id}</Text>
                {chat.data.map(chatItem => {
                  const isMe = chatItem.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      isMe={isMe}
                      text={chatItem.data.chatContent}
                      time={chatItem.data.chatTime}
                      image={isMe ? null : dataDoctor.photo}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
      <InputChat
        placeholder={`Kirim pesan ke ${dataDoctor.fullName}`}
        onChangeText={value => setChatContent(value)}
        value={chatContent}
        onPress={sendChat}
      />
      <View style={styles.gap}>
        <Gap height={30} />
      </View>
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
    marginHorizontal: -16,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  gap: {
    backgroundColor: colors.white,

    marginHorizontal: -16,
  },
});

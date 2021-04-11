import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData} from '../../utils';

export default function Message({navigation}) {
  const [user, setUser] = useState({});
  const [dataHistory, setDataHistory] = useState([]);

  useEffect(() => {
    getDataUserLocal();
    const rootDB = Firebase.database().ref();
    const urlHistory = `message/${user.uid}/`;
    const messageDB = rootDB.child(urlHistory);

    messageDB.on('value', async snapshoot => {
      if (snapshoot.val()) {
        const oldDataChat = snapshoot.val();
        const newDataChat = [];
        const promises = await Object.keys(oldDataChat).map(async key => {
          const urlUidDoctor = `doctors/${oldDataChat[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
          newDataChat.push({
            id: key,
            ...oldDataChat[key],
            detailDoctor: detailDoctor.val(),
          });
        });

        await Promise.all(promises);
        // console.log(newDataChat);
        setDataHistory(newDataChat);
      }
    });
  }, [user.uid]);

  const getDataUserLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.heading}>Message</Text>
        {dataHistory.map(history => {
          const dataDoctor = history.detailDoctor;
          return (
            <List
              key={history.id}
              profile={{uri: history.detailDoctor.photo}}
              name={history.detailDoctor.fullName}
              desc={history.lastChatContent}
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          );
        })}
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

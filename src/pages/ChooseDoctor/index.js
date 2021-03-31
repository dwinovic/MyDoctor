import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DMDoctor6} from '../../assets';
import {Header, List} from '../../components';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapperDoctor}>
        <List
          name="Siti"
          profile={DMDoctor6}
          desc="Wanita"
          type="next"
          onPress={() => navigation.navigate('Chatting')}
        />
        <List name="Siti" profile={DMDoctor6} desc="Wanita" type="next" />
        <List name="Siti" profile={DMDoctor6} desc="Wanita" type="next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapperDoctor: {
    marginHorizontal: 16,
    marginVertical: 20,
    flex: 1,
  },
});

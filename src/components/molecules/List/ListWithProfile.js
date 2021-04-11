import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICEditProfile,
  ICHelpCenter,
  ICLanguage,
  ICNext,
  ICStar,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListWithProfile = ({onPress, icon, name, profile, type, desc}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <ICEditProfile />;
    }
    if (icon === 'language') {
      return <ICLanguage />;
    }
    if (icon === 'rated') {
      return <ICStar />;
    }
    if (icon === 'help-center') {
      return <ICHelpCenter />;
    }
    return <ICEditProfile />;
  };

  return (
    <View style={styles.MainWrapper}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon ? (
          <Icon style={styles.icon} />
        ) : (
          <Image source={profile} style={styles.avatar} />
        )}
        <View style={styles.wrappMessage}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        {type === 'next' && <ICNext />}
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );
};

export default ListWithProfile;

const styles = StyleSheet.create({
  MainWrapper: {
    marginBottom: 16,
    // flex: 1,
    // backgroundColor: 'yellow',
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
    textTransform: 'capitalize',
  },
  wrappMessage: {
    flex: 1,
    marginLeft: 16,
  },
});

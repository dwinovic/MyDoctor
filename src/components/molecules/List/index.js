import React from 'react';
import {View} from 'react-native';
import OnlyText from './OnlyText';
import ListWithProfile from './ListWithProfile';

export default function List({
  profile,
  name,
  desc,
  type,
  onPress,
  icon,
  onlyText,
}) {
  const TypeList = () => {
    if (onlyText) {
      return <OnlyText name={name} desc={desc} />;
    }

    return (
      <ListWithProfile
        onPress={onPress}
        icon={icon}
        name={name}
        profile={profile}
        type={type}
        desc={desc}
      />
    );
  };

  return (
    <View>
      <TypeList />
    </View>
  );
}

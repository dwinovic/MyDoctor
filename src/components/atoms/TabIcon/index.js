import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICTabDoctor,
  ICTabDoctorActive,
  ICTabHospitals,
  ICTabHospitalsActive,
  ICTabMessage,
  ICTabMessageActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function TabIcons({label, active, onPress, onLongPress}) {
  const Icon = () => {
    if (label === 'Doctor') {
      return active ? <ICTabDoctorActive /> : <ICTabDoctor />;
    }
    if (label === 'Message') {
      return active ? <ICTabMessageActive /> : <ICTabMessage />;
    }
    if (label === 'Hospitals') {
      return active ? <ICTabHospitalsActive /> : <ICTabHospitals />;
    }
    return <ICTabDoctor />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    fontFamily: fonts.primary[600],
    marginTop: 4,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
  }),
});

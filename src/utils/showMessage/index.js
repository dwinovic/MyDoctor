import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const showError = errorMessage => {
  showMessage({
    message: errorMessage,
    type: 'default',
    backgroundColor: colors.infoAlert,
    color: colors.white,
    animationDuration: 500,
    duration: 3500,
  });
};

export const showSuccess = success => {
  showMessage({
    message: success,
    type: 'default',
    backgroundColor: colors.primary,
    color: colors.white,
    animationDuration: 500,
    duration: 3500,
  });
};

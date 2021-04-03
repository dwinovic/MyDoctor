const mainColors = {
  green1: '#09CE67',
  green2: '#A0FFCE',
  green3: '#EDFCFD',
  green4: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EEEEEE',
  grey4: '#EDEEF0',
  grey5: '#B1B7C2',
  black1: '#000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    white: 'white',
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey4,
      text: mainColors.grey5,
    },
  },
  border: mainColors.grey2,
  card: mainColors.green2,
  divider: mainColors.grey2,
  ChatItem: {
    isMe: mainColors.green3,
    others: mainColors.green4,
  },
  disable: mainColors.grey3,
  loadingBackground: mainColors.black2,
  infoAlert: mainColors.red1,
};

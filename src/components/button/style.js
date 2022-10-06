import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 20,
    marginHorizontal: 30,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default StyleSheet.create({
  primary: StyleSheet.create({
    ...baseStyle,
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    button: {
      ...baseStyle.button,
      backgroundColor: 'green',
    },
  }),
  tertiary: StyleSheet.create({
    ...baseStyle,
    button: {
      backgroundColor: 'transparent',
      width: '80%',
    },
    buttonText: {
      ...baseStyle.buttonText,
      fontSize: 10,
      color: 'black',
    },
  }),
  quaternary: StyleSheet.create({}),
});

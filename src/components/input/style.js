import {StyleSheet} from 'react-native';

const basestyle = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    height: 60,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },

  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    width: '100%',
  },
});

export default StyleSheet.create({
  primary: StyleSheet.create({
    ...basestyle,
  }),
  secondary: StyleSheet.create({
    ...basestyle,
    body: {
      ...basestyle.body,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      ...basestyle.input,
      width: '80%',
    },
    button_container: {
      width: '100%',
    },
  }),
});

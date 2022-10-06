import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    width: '70%',
    height: '40%',
    margin: 20,
    backgroundColor: '#add8e6',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  modalBack: {
    flex: 1,
  },
});

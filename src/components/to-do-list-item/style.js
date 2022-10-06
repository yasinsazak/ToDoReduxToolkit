import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    width: '90%',
    borderRadius: 10,
  },

  title: {
    fontSize: 30,
    color: 'black',
    width: '75%',
  },

  buttonView: {
    flexDirection: 'row',
  },

  editButton: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

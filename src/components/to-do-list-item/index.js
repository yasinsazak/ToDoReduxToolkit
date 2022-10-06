import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from '..';
import {deleteTodoAsync} from '../../api';

import {useDispatch} from 'react-redux';

import styles from './style';

export const TodoListItem = ({item, setModalVisible, setEditValue, setID}) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const deleteTask = () => {
    dispatch(deleteTodoAsync({id: item.id}));
  };

  const openModal = () => {
    setModalVisible(true);
    setEditValue(item.title);
    setID(item.id);
  };

  return (
    <View style={styles.item}>
      <Checkbox />
      <Text style={styles.title}>{item?.title}</Text>
      <View style={styles.buttonView}>
        <Icon
          style={styles.editButton}
          name="pencil"
          size={25}
          onPress={openModal}
          backgroundColor={'transparent'}
          color={'green'}
        />
        <Icon
          style={styles.deleteButton}
          name="delete"
          size={25}
          onPress={deleteTask}
          backgroundColor={'transparent'}
          color={'red'}
        />
      </View>
    </View>
  );
};

import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './style';

import {Button, Input, TodoListItem} from '../../components';

import {useDispatch, useSelector} from 'react-redux';
import {logoutProcess, editTodoAsync, addTodoAsync} from '../../api';
import strings from '../../utils/strings';

export const TodoScreen = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [id, setID] = useState();
  const [reverseItemData, setReverseItemData] = useState([]);
  const [editValue, setEditValue] = useState();

  const {getResponse} = useSelector(state => state.task);

  const renderItem = ({item}) => {
    return <TodoListItem {...{setModalVisible, setEditValue, setID, item}} />;
  };

  const changeModalStatus = () => {
    setModalVisible(!modalVisible);
  };

  const onSubmitTask = () => {
    if (value.length == 0) {
      Alert.alert(strings.input_alert);
    } else {
      dispatch(addTodoAsync({title: value}));
      setValue('');
    }
  };

  const setItemContent = () => {
    if (editValue.length == 0) {
      Alert.alert(strings.input_alert);
    } else {
      dispatch(editTodoAsync({title: editValue, id: id}));
      changeModalStatus();
    }
  };

  const logout = () => {
    dispatch(logoutProcess());
  };

  const reverseArr = input => {
    return [...input].reverse();
  };

  useEffect(() => {
    getResponse !== undefined
      ? setReverseItemData(reverseArr(getResponse))
      : null;
  }, [getResponse]);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.text}>{strings.todo_screen_title}</Text>
      <Input
        placeholder={strings.input_placeholder}
        value={value}
        setValue={setValue}
        theme="primary"
      />
      <Button
        onPress={onSubmitTask}
        theme="primary"
        buttonText={strings.add_button}
      />
      <FlatList
        data={reverseItemData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        onPress={logout}
        buttonText={strings.logout_button}
        theme="primary"
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={changeModalStatus}>
        <TouchableOpacity style={styles.modalBack} onPress={changeModalStatus}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <Input
                  value={editValue}
                  setValue={setEditValue}
                  theme="primary"
                />
                <Button
                  theme="secondary"
                  buttonText={strings.modal_edit_button}
                  onPress={setItemContent}
                />
                <Button
                  theme="primary"
                  buttonText={strings.modal_close_button}
                  onPress={changeModalStatus}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

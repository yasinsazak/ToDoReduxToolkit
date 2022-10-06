import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'https://demo.pigasoft.com/todo/api/';
const API_KEY = 'nOh9lodJb4U6DbN6SQV37cQ1SBTFZn7x';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['X-API-Key'] = API_KEY;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

const getTodosAsync = createAsyncThunk('task/getTodosAsync', async () => {
  try {
    const res = await axios.get('todoList');
    return res.data;
  } catch (error) {}
});

const addTodoAsync = createAsyncThunk(
  'task/addTodoAsync',
  async (data, thunkAPI) => {
    const {title} = data;
    const params = new FormData();
    params.append('title', title);
    try {
      const res = await axios.post('addToList', params);
      thunkAPI.dispatch(getTodosAsync());
      return res.data;
    } catch (error) {}
  },
);
const editTodoAsync = createAsyncThunk(
  'task/editTodoAsync',
  async (data, thunkAPI) => {
    const {title, id} = data;
    const params = new FormData();
    params.append('title', title);
    params.append('id', id);
    try {
      const res = await axios.post('updateListItem', params);
      thunkAPI.dispatch(getTodosAsync());
      return res.data;
    } catch (error) {}
  },
);

const deleteTodoAsync = createAsyncThunk(
  'task/deleteTodoAsync',
  async (data, thunkAPI) => {
    const {id} = data;
    const params = new FormData();
    params.append('id', id);
    try {
      const res = await axios.post('removeListItem', params);
      thunkAPI.dispatch(getTodosAsync());
      return res.data;
    } catch (error) {
      return {error: true};
    }
  },
);

const loginProcess = createAsyncThunk(
  'authentication/loginProcess',
  async (data, thunkAPI) => {
    const {email, password} = data;
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    try {
      const res = await axios.post('login', params);
      res.data !== undefined &&
        AsyncStorage.setItem('@USERDATA', JSON.stringify(data));
      thunkAPI.dispatch(getTodosAsync());

      return res.data;
    } catch (error) {}
  },
);

const logoutProcess = createAsyncThunk(
  'authentication/logoutProcess',
  async () => {
    try {
      const res = await axios.get('logout');
      AsyncStorage.removeItem('@USERDATA');
      return res.data;
    } catch (error) {}
  },
);

export {
  logoutProcess,
  loginProcess,
  addTodoAsync,
  getTodosAsync,
  deleteTodoAsync,
  editTodoAsync,
};

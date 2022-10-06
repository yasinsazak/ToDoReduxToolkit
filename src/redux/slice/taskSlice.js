import {createSlice} from '@reduxjs/toolkit';
import {
  addTodoAsync,
  getTodosAsync,
  deleteTodoAsync,
  editTodoAsync,
} from '../../api';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    status: undefined,
    addStatus: undefined,
    data: undefined,
    getResponse: undefined,
    isLoading: {
      addTodo: false,
      editTodo: false,
    },
    error: undefined,
  },

  extraReducers: {
    //addTodo
    [addTodoAsync.pending]: state => {
      state.addTodo = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.addTodo = false;
      state.addStatus = action.payload.status;
    },
    [addTodoAsync.rejected]: state => {
      state.addTodo = false;
    },
    //deleteTodo
    [deleteTodoAsync.pending]: state => {
      state.isLoading = true;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      state.status = action.payload.status;
      state.isLoading = false;
    },
    [deleteTodoAsync.rejected]: state => {
      state.isLoading = false;
    },
    //getTodo
    [getTodosAsync.pending]: state => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getResponse = action.payload?.data;
    },
    [getTodosAsync.rejected]: state => {
      state.isLoading = false;
    },
    //editTodo
    [editTodoAsync.pending]: state => {
      state.editTodo = true;
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.editTodo = false;
      state.status = action.payload.status;
    },
    [editTodoAsync.rejected]: state => {
      state.editTodo = false;
    },
  },
});

export default taskSlice.reducer;

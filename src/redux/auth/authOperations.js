import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'user/register',
  async credentials => {
    try {
      const response = await axios.post('users/signup', credentials);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const logIn = createAsyncThunk('user/login', async credentials => {
  try {
    const response = await axios.post('users/login', credentials);
    console.log(response);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

// mail: kate100@mail.com

export const logOut = createAsyncThunk('user/logout', async () => {
  try {
    axios.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    console.log(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHeader(token);
    try {
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as AuthApi from 'api/auth';

const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password, remember }, { rejectWithValue, dispatch }) => {
    try {
      const response = await AuthApi.logIn({
        email,
        password,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export { logIn };

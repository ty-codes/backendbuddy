import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './actions';

const initialState = {
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //logIn
    builder.addCase(logIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      const { user, token } = action.payload.data;

      localStorage.setItem('bearer_token', token);

      state.user = user;
      state.loading = false;
    });
    builder.addCase(logIn.rejected, state => {
      state.loading = false;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

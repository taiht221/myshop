import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'Apis/userApi';
export const register = createAsyncThunk('register', async (payload) => {
  const data = await userApi.register(payload);
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.data));
  return data.data;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.loading = true;
    },
  },
});
const { reducer } = userSlice;
export default reducer;

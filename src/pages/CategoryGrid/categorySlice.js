import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryApi from 'Apis/categoryApi';
export const callCategory = createAsyncThunk('categories', async (payload) => {
  const data = await categoryApi.getAll(payload);
  console.log(data.data);

  return data.data;
});

const categoriSlice = createSlice({
  name: 'categori',
  initState: {
    categoriData: [],
    loading: true,
  },

  reducers: {},
  extraReducers: {
    [callCategory.fulfilled]: (state, action) => {
      state.categoryData.push(action.payload);
    },
    [callCategory.pending]: (state) => {
      state.loading = false;
    },
  },
});
const { reducer } = categoriSlice;
export default reducer;

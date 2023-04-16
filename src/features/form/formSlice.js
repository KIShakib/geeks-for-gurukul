import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {}
};



export const counterSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    getFormData: (state, action) => {
      state.formData = action.payload
    },
  },

});

export const { getFormData } = counterSlice.actions;


export default counterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {}
};



export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    getFormData: (state, action) => {
      state.formData = action.payload
    },
  },

});

export const { getFormData } = formSlice.actions;


export default formSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {},
  modalOpen: false,
};



export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    getFormData: (state, action) => {
      state.formData = action.payload
    },
    toggleModal: (state, action) => {
      state.modalOpen = action.payload
    },
  },

});

export const { getFormData, toggleModal } = formSlice.actions;


export default formSlice.reducer;

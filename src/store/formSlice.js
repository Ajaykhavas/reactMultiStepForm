import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      step1: {},
      step2: {},
      step3: {},
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      const { step, data } = action.payload;
      state.formData[step] = data;
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;

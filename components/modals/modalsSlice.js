  import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    // name of modal to open
    open: "",

    //edit property for modals who have an edit variant
    modalProps: {},
  },
  reducers: {
    // action to open a modal
    openModal: (state, action) => {
      console.log("State", action);
      state.open = action.payload.modalName;
      state.modalProps = action.payload.modalProps;
    },

    closeModal: (state) => {
      state.open = "";
      state.modalProps = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;

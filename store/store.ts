import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../components/toast/toastSlice";
import modalsReducer from "../components/modals/modalsSlice";

 
export default configureStore({
  reducer: {
    toast: toastReducer,
    modals: modalsReducer,
  },
});

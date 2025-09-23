import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./login/authSliceReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;

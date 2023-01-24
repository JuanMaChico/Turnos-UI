import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./reducers/appointmentReducer";
import userReducer from "./reducers/userReducer";

export default configureStore({
    reducer: {
        appointmentDate: appointmentReducer,
        userData: userReducer
    }
});


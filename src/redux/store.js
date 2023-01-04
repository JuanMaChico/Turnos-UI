import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./reducers/appointmentReducer";

export default configureStore({
    reducer: {
        appointmentDate: appointmentReducer
    }
});


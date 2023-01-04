import { createSlice } from "@reduxjs/toolkit";

export const appointmentDateReducer = createSlice({
    name: "appointmentDate",
    initialState: {
        day: null,
        hour: null
    },
    reducers: {
        setAppointmentDay: (state, action) => {
            state.day = action.payload
        },
        setAppointmentHour: (state, action) => {
            state.hour = action.payload
        }
    }
});

export const { setAppointmentDay, setAppointmentHour } = appointmentDateReducer.actions;

export default appointmentDateReducer.reducer;
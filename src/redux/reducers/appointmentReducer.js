import { createSlice } from "@reduxjs/toolkit";

export const appointmentDateReducer = createSlice({
    name: "appointmentDate",
    initialState: {
        day: null,
        hour: null,
        employee: null
    },
    reducers: {
        setAppointmentDay: (state, action) => {
            state.day = action.payload
        },
        setAppointmentHour: (state, action) => {
            state.hour = action.payload
        },
        setAppointmentEmployee: (state, action) => {
            state.employee = action.payload
        }
    }
});

export const { setAppointmentDay, setAppointmentHour, setAppointmentEmployee } = appointmentDateReducer.actions;

export default appointmentDateReducer.reducer;
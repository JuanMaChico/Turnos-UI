import { createSlice } from "@reduxjs/toolkit";

export const userDataReducer = createSlice({
    name: "userData",
    initialState: {
        user: { token: null },
        store: {},
        appointments: {}
    },
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        },
        setStoreSelected: (state, action) => {
            state.store = action.payload
        },
        setUserAppointments: (state, action) => {
            state.appointments = action.payload
        }
    }
});

export const { setUserData, setStoreSelected, setUserAppointments } = userDataReducer.actions;
export default userDataReducer.reducer;
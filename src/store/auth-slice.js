import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false, role: "", id: ""},
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.role = action.payload;
            state.id = action.payload.id ?? ""
        },
        logout(state) {
            state.isLoggedIn = false;
            state.role = ""
            state.id = ""
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice;
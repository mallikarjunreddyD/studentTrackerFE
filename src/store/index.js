import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import userSlice from "./users-slice";
import projectSlice from "./projects-slice";
import meetingSlice from "./meetings-slice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: userSlice.reducer,
        projects: projectSlice.reducer,
        meetings: meetingSlice.reducer
    }
});

export default store;
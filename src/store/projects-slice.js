import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
    },
    reducers: {
        displayProjects(state, action){
            state.projects = action.payload;
        }
    }
})

export const projectActions = projectSlice.actions;

export default projectSlice;
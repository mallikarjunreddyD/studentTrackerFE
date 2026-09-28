import { createSlice } from "@reduxjs/toolkit";

const meetingSlice = createSlice({
    name: "meetings",
    initialState: {
        meetings: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchMeetingsStarted(state) {
            state.loading = true;
            state.error = null
        },

        displayMeetings(state, action) {
            state.meetings = action.payload
            state.loading = false
        },


        fetchMeetingsFailed(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const meetingActions = meetingSlice.actions

export default meetingSlice;
import { meetingActions } from "./meetings-slice"



export const fetchMeetingsData = () => {
    return async (dispatch, getState) => {
        dispatch(meetingActions.fetchMeetingsStarted())

        try {
            const projects = getState().projects.projects

            const meetingGroups = await Promise.all(
                projects.map(async (project) => {
                    const response = await fetch(
                        `http://localhost:3000/projects/${project.id}/meetings`,
                    )

                    if (!response.ok) {
                        throw new Error(
                            `Unable to fetch meetings for project ${project.id}`,
                        )
                    }

                    const projectMeetings = await response.json()

                    return projectMeetings.map((meeting) => ({
                        ...meeting,
                        project: meeting.projectId,
                        faculty: project.facultyId,
                    }))
                }),
            )

            const meetings = meetingGroups.flat()

            console.log(meetings)

            dispatch(
                meetingActions.displayMeetings(meetings),
            )
        } catch (error) {
            dispatch(
                meetingActions.fetchMeetingsFailed(error.message),
            )
        }
    }
}
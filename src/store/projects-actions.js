import { projectActions } from './projects-slice'


export const fetchProjectData = () => {
    return async (dispatch, getState) => {
        const { role, id } = getState().auth
        const params = new URLSearchParams()

        if (role === 'FACULTY') {
            params.set('facultyId', id)
        }

        if (role === 'STUDENT') {
            params.set('studentId', id)
        }

        const query = params.toString()
        
        const url = `http://localhost:3000/projects${query ? `?${query}` : ''}`


        try {
            const response = await fetch(url);
            console.log(response)
            if (!response.ok) {
                throw new Error('Unable to fetch projects')
            }
            const projects = await response.json()
            dispatch(projectActions.displayProjects(projects))

        } catch (err) {
            console.log(err);
        }
    }
}
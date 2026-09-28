import { userActions } from "./users-slice"


export const fetchUserData = () => {
    return async(dispatch) => {
        const fetchHandler = async() =>{
            const res = await fetch("http://localhost:3000/users") 
            if(!res.ok){
                throw new Error('unable to fetch users')
            }
            const data = await res.json() 
            return data;
        }
        try {
            const userData = await fetchHandler();
            dispatch(userActions.displayUsers(userData))

        } catch(err){
            console.log(err);
        }
    }
}
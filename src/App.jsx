/* eslint-disable no-unused-vars -- demo modules are toggled manually during development */
import Auth from './components/Auth'
import Admin from './modules/Admin'
import Faculty from './modules/Faculty'
import Student from './modules/Student'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const role = useSelector(state => state.auth.role)
    return (
    <>
      { !isLoggedIn && <Auth /> }
      {isLoggedIn && role === "ADMIN" && <Admin /> }
     { isLoggedIn && role === "FACULTY" && <Faculty /> }
      { isLoggedIn && role === "STUDENT" &&<Student /> }
    </>
  )
}

export default App

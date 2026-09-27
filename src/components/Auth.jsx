import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

function Auth() {
  const [role, setRole] = useState('ADMIN')
  const requiresId = role === 'FACULTY' || role === 'STUDENT'

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login(role))
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-brand">
          <span className="brand-mark">ST</span>
          <div>
            <strong>Student Tracker</strong>
           
          </div>
        </div>

        <div className="auth-heading">
          <p className="eyebrow">Welcome back</p>
          <h1 id="login-title">Sign in to your portal</h1>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Role
            <select value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="ADMIN">Administrator</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </label>

          {requiresId && (
            <label>
              {role === 'FACULTY' ? 'Faculty ID' : 'Student ID'}
              <input
                key={role}
                name="userId"
                placeholder={role === 'FACULTY' ? 'Enter faculty ID' : 'Enter student ID'}
              />
            </label>
          )}

          <button className="auth-submit" type="submit">Continue</button>
        </form>
      </section>
    </main>
  )
}

export default Auth

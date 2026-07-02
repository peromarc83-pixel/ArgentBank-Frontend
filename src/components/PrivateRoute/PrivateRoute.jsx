import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const token = useSelector(function(state) { return state.auth.token })

  if (token === null) {
    return <Navigate to="/login" />
  }

  return children
}

export default PrivateRoute
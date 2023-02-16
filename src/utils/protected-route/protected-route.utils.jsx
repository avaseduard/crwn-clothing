import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectCurrentUser } from '../../store/user/user.selector'

const ProtectedRoute = ({ children }) => {
  // Get the current user from state
  const currentUser = useSelector(selectCurrentUser)

  // If we don't have an user, allow navigate to auth route, if we have an user, redirect to shop and protect the auth route
  return !currentUser ? <Outlet /> : <Navigate to='shop' />
}

export default ProtectedRoute

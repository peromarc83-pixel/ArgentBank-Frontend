import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
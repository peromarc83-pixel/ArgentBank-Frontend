import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from './router'
import { setUserProfile, logout } from './redux/auth/authSlice'

function App() {
  const token = useSelector(function(state) { return state.auth.token })
  const userName = useSelector(function(state) { return state.auth.userName })
  const dispatch = useDispatch()

  useEffect(function() {
    if (token === null || userName !== null) {
      return
    }

    async function chargerProfil() {
      const reponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      })

      if (reponse.ok === false) {
        dispatch(logout())
        return
      }

      const donnees = await reponse.json()
      dispatch(setUserProfile({
        firstName: donnees.body.firstName,
        lastName: donnees.body.lastName,
        userName: donnees.body.userName,
      }))
    }

    chargerProfil()
  }, [token, userName, dispatch])

  return <Router />
}

export default App

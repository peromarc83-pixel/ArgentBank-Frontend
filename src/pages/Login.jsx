import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setEmail, loginSuccess, setUserProfile } from '../redux/auth/authSlice'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Login() {
  const email = useSelector(function(state) { return state.auth.email })
  const [password, setPassword] = useState('')
  const [souvienstoi, setSouvienstoi] = useState(false)
  const [erreur, setErreur] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    setErreur(null)
   
    const reponseLogin = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    })

    const donneesLogin = await reponseLogin.json()

    if (reponseLogin.ok === false) {
      setErreur('Email ou mot de passe incorrect')
      return
    }

    const token = donneesLogin.body.token
    dispatch(loginSuccess({ token: token, email: email, rememberMe: souvienstoi }))

   
    const reponseProfil = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })

    const donneesProfil = await reponseProfil.json()
    dispatch(setUserProfile({
      firstName: donneesProfil.body.firstName,
      lastName: donneesProfil.body.lastName,
      userName: donneesProfil.body.userName,
    }))

    
    navigate('/profile')
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Se connecter</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Nom d'utilisateur</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={function(e) { dispatch(setEmail(e.target.value)) }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={function(e) { setPassword(e.target.value) }}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={souvienstoi}
                onChange={function(e) { setSouvienstoi(e.target.checked) }}
              />
              <label htmlFor="remember-me">Souviens-toi de moi</label>
            </div>
            {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
            <button className="sign-in-button">Se connecter</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Login
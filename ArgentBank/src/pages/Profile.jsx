import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserProfile } from '../features/auth/authSlice'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Account from '../components/Account/Account'

function Profile() {
  const firstName = useSelector(function(state) { return state.auth.firstName })
  const lastName = useSelector(function(state) { return state.auth.lastName })
  const userName = useSelector(function(state) { return state.auth.userName })
  const token = useSelector(function(state) { return state.auth.token })
  const dispatch = useDispatch()

  const [modeEdition, setModeEdition] = useState(false)
  const [nouveauUserName, setNouveauUserName] = useState('')
  const [erreur, setErreur] = useState(null)

  function handleEditClick() {
    setNouveauUserName(userName)
    setModeEdition(true)
  }

  function handleCancel() {
    setModeEdition(false)
    setErreur(null)
  }

  async function handleSave() {
    setErreur(null)

    const reponse = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({ userName: nouveauUserName }),
    })

    if (reponse.ok === false) {
      setErreur('Erreur lors de la mise à jour')
      return
    }

    const donnees = await reponse.json()
    dispatch(setUserProfile({
      firstName: donnees.body.firstName,
      lastName: donnees.body.lastName,
      userName: donnees.body.userName,
    }))

    setModeEdition(false)
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          {modeEdition ? (
        <div>
    <div className="input-wrapper">
      <label>User name :</label>
      <input
        type="text"
        value={nouveauUserName}
        onChange={function(e) { setNouveauUserName(e.target.value) }}
      />
    </div>
    <div className="input-wrapper">
      <label>First name :</label>
      <input type="text" value={firstName} disabled />
    </div>
    <div className="input-wrapper">
      <label>Last name :</label>
      <input type="text" value={lastName} disabled />
    </div>
    {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
    <button className="edit-button" onClick={handleSave}>Save</button>
    <button className="edit-button" onClick={handleCancel}>Cancel</button>
  </div>
) : (
  <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
)}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  )
}

export default Profile
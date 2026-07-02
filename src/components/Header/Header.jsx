import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

function Header() {
const userName = useSelector(function(state) { return state.auth.userName })
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logout())
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userName ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Se déconnecter
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
           Se connecter
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header
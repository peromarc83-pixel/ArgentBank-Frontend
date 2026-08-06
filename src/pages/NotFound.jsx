import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function NotFound() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <h1>404</h1>
          <p>Oups, la page que vous recherchez n'existe pas.</p>
          <Link to="/" className="sign-in-button">Retour à l'accueil</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NotFound

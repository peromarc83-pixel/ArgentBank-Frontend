import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Contenu mis en avant</h2>
            <p className="subtitle">Aucuns frais.</p>
            <p className="subtitle">Aucun dépôt minimum.</p>
            <p className="subtitle">Taux d'intérêt élevés.</p>
            <p className="text">Ouvrez un compte d'épargne chez Argent Bank dès aujourd'hui !</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Fonctionnalités</h2>
          <div className="feature-item">
            <img src="/img/icon-chat.png" alt="Icône Chat" className="feature-icon" />
            <h3 className="feature-item-title">Vous êtes notre priorité absolue</h3>
            <p>Besoin de parler à un représentant ? 
              Vous pouvez nous contacter via notre chat disponible 24h/24 et 7j/7 ou par téléphone en moins de 5 minutes.</p>
          </div>
          <div className="feature-item">
            <img src="/img/icon-money.png" alt="Icône Argent" className="feature-icon" />
            <h3 className="feature-item-title">Des économies supplémentaires impliquent des taux plus élévés</h3>
            <p>Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé !</p>
          </div>
          <div className="feature-item">
            <img src="/img/icon-security.png" alt="Icône Sécurité" className="feature-icon" />
            <h3 className="feature-item-title">Une sécurité digne de confiance</h3>
            <p>Nous utilisons un système de cryptage de pointe pour garantir la sécurité de vos données et de votre argent.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
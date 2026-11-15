import DashboardPreview from '../DashboardPreview/DashboardPreview'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <h1 className="hero__title">Know where every project stands.</h1>

        <div className="hero__row">
          <p className="hero__text">
            NEXORA keeps your tasks, deadlines and teammates in one place, so your team spends
            less time asking for updates and more time finishing the work.
          </p>
          <div className="hero__actions">
            <a href="#pricing" className="btn btn-primary">
              Get Started
            </a>
            <a href="#about" className="btn btn-outline">
              See how it works
            </a>
          </div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  )
}

export default Hero

import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">EcoSort AI</div>
          <p className="footer__copy">© 2024 EcoSort AI. Precision Waste Classification.</p>
        </div>

        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">API Docs</a>
          <a href="#">Contact Support</a>
        </div>

        <div className="footer__social">
          <div className="footer__social-icon">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div className="footer__social-icon">
            <span className="material-symbols-outlined">share</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

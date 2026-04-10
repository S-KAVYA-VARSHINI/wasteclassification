import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          EcoSort AI
        </NavLink>

        <div className="navbar__links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} end>Home</NavLink>
          <NavLink to="/classify" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Classify</NavLink>
          <NavLink to="/history" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>History</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>About Model</NavLink>
        </div>

      </div>
    </nav>
  )
}

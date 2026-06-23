import { profile } from '../data/profile'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#top" className="monogram">
          {profile.firstName}
          <span className="dot">.</span>
        </a>
        <div className="nav-links">
          <a className="nav-page" href="#work">work</a>
          <a className="nav-page" href="#experience">experience</a>
          <a className="nav-page" href="#toolkit">build</a>
          <a className="nav-page" href="#about">about</a>
          {profile.status.active && (
            <span className="nav-status">
              <span className="pulse" aria-hidden="true" />
              {profile.status.label}
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

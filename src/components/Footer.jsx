import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <p className="footer-cta">
          Let us build something.{' '}
          <a href={`mailto:${profile.links.email}`}>Say hi &rarr;</a>
        </p>
        <div className="footer-meta">
          <span>
            {profile.firstName} {profile.lastName} · {profile.location} ·{' '}
            {year}
          </span>
          <span className="footer-social">
            <a href={profile.links.github}>github</a>
            <a href={profile.links.linkedin}>linkedin</a>
            <a href={`mailto:${profile.links.email}`}>email</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

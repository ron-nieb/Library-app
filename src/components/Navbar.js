import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../css/Navbar.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="mind-benders">
        Mind-Benders Library
      </Link>
      <ul className="menu">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

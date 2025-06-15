import { Link } from "react-router-dom"

export default function TopNav({
  pages
}){
  return (
    <nav className="topnav">
      <ul className="topnav-ul">
          <Link to="/" className="topnav-logolink">
            <img 
              className="topnav-logo"
              alt="Little Lemon Logo"
              src="/assets/images/logos/Logo.svg"
            />
          </Link>
          <ul className="hl topnav-linkflex">
            {pages.map((page, index) => {
              return(
              <Link key={index} to={page.path} className="topnav-link">{page.name}</Link>
              )
            })}
          </ul>
      </ul>
    </nav>
  )
}
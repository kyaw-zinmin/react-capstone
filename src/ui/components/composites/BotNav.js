import { Link } from "react-router-dom"
import VerticalLinks from "../atomics/VerticalLinks"

export default function BotNav({
  pages
}){
  return (
    <nav className="botnav">
      <div className="botnav-grid">
        <ul className="botnav-ul">
          <Link to="/" className="botnav-logolink">
            <img 
              className="botnav-logo"
              src="/assets/images/logos/Little Lemon Logo Bg Removed.png"
              alt="Little Lemon Logo"/>
          </Link>
          <ul className="botnav-vertlinksflex">
            <VerticalLinks links={pages}/>
            <VerticalLinks links={pages}/>
            <VerticalLinks links={pages}/>
          </ul>
        </ul>
      </div>
      <p className="hl botnav-copy">Copyright &copy; Kyaw Zin Min, 2025. All Rights Reserved.</p>
    </nav>
  )
}
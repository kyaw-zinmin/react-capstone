import { Link } from "react-router-dom"

export default function VerticalLinks({
  title,
  links
}){
  return(
    <section className="vertlinks">
      <header className="section-cat vertlinks-header"
      >{title? title: "Title"}</header>
      <ul className="vertlinks-ul">
        {links.map((link, index) => {
          return(
            <Link 
            className="hl vertlinks-link"
            key={index}
            to={link.path}
            >{link.name}</Link>
          )
        })}
      </ul>
    </section>
  )
}

export default function TopNav(){
  const navLinks = ['Home', 'About', 'Menu', 'Reservations', 'Orderonline', 'Login'];

  return(
    <nav
    aria-label="Navigation bar at the top"
    className="top-nav"
    >
      <img 
      className="img"
      name="Little Lemon Logo" 
      src={process.env.PUBLIC_URL + 'assets/images/logos/Logo.svg'}
      alt='Little Lemon Restaurant Logo'
      />
      <ul
      className="ul"
      >
        {
          navLinks.map((link, index) => {
            return (
                <a 
                className="page-link"
                id={index}
                key={`${index}-${link}`}
                rel="page"
                href={`@/pages/${link}/${link}.js`}
                >{link}</a>
            )
          })
        }
      </ul>
    </nav>
  )
}
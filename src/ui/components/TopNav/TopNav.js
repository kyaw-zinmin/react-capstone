import {Routes, Route, Link} from 'react-router-dom';
import { pageLinks } from '../../../data/general';

export default function TopNav(){

  return(
    <nav
    aria-label="Navigation bar at the top"
    className="top-nav"
    >
      <img 
      aria-label="Little Lemon Logo"
      name="Little Lemon Logo" 
      className="top-nav-logo"
      src={process.env.PUBLIC_URL + 'assets/images/logos/Logo.svg'}
      alt='Little Lemon Restaurant Logo'
      />
      <ul
      className="ul"
      >
        {pageLinks.map((link) => {
          return(
            <Link
            key={link.displayName}
            to={link.path}
            className='page-link'
            >{link.displayName}</Link>
          )
        })}
      </ul>
          <Routes>
            {pageLinks.map((link) => {
              const Component = link.component;
              return(
                <Route
                path={link.path}
                element={<Component />}
                ></Route>
              )
            })}
          </Routes>
    </nav>
  )
}
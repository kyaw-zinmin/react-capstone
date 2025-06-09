import {Routes, Route, Link} from 'react-router-dom';

export default function VerticalLinks(
  {
    linkTitle,
    arrayOfLinks,
    additionalClass
  }
){
  if(Array.isArray(arrayOfLinks)){
    const rows = arrayOfLinks.length;
    return(

      <div className={
        `
        vertical-link
        ${additionalClass}
        grid
        grid-cols-1
        grid-rows-${rows + 2}
        gap-0
        `
      }>
        <header
        aria-label="Bottom Navigation Links"
        className="vertical-link-header section-category"
        >{linkTitle}</header>
        <div
        aria-label="A list of links"
        className={
          `
          vertical-link-list
          row-span-${rows}

          grid
          grid-cols-1
          grid-rows-${rows}
          `
        }
        >
          {/* Returns Links for navigation */}
          {arrayOfLinks.map((link) => {
            return(
              <Link
              key={link.displayName}
              to={link.path}
              className="paragraph vertical-link-item"
              >{link.displayName}</Link>
            )
          })}
        </div>
        {/* Returns Routes for Links */}
        <Routes>
            {arrayOfLinks.map((link) => {
              const Component = link.component;
              return(
                <Route
                path={link.path}
                element={<Component />}
                ></Route>
              )
            })}
        </Routes>
      </div>

    )
  }
  else {
    return <>arrayOfLinks is not an array.</>
  }
}
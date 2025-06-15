import {Routes, Route} from 'react-router-dom'

export default function Main({
  pages
}){
  return(
    <Routes>
        {pages.map((page) => {
          return(
            <Route path={page.path} element={<page.component />}/>
          )
        })}
    </Routes>
  )
}
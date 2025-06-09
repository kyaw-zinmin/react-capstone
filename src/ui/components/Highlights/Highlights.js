import Card from '../../atomic/Card';
import menuList from '@/data/menu.json';
// import { checkIfFileExists } from '../../../utils/utils';
// import { useEffect } from 'react';

export default function Highlights(){
  
  // useEffect(() => {
  //   let menuImgsPath = [];
  //   menuImgsPath = menuList.map((item) => {
  //     const path = `/assets/images/photos/${item.name}.jpg`
  //     checkIfFileExists(path).then((exists) => {
  //       if(exists){
  //         return path;
  //       }
  //     })
  //     return path
  //   })
  // },[])

  return(
    <section
    className="highlights"
    aria-label="Highlights section"
    >
      <div
      className='hl-grid'
      >
        <header
        aria-label="Highlights header"
        className="hl-header"
        >
          <div
          className='hl-header-grid'
          >
            <h1
            aria-label="Highlights Title"
            className="subtitle stick-to-text col-start-3 col-span-2 self-center"
            >Specials</h1>
            <button
            aria-label="Online Menu Button"
            className="cta-button col-start-9 col-span-2 self-center justify-self-end"
            type="button"
            onClick={``}
            >Online Menu</button>
          </div>
        </header>
        <section
        aria-label="Highlights Content"
        className="hl-content"
        >
          <div className='hl-content-grid'>
            {menuList.map((item) => {
              return (
                <Card 
                imgPath={`/assets/images/photos/${item.name}.jpg`}
                itemTitle={item.name}
                itemPrice={item.price}
                itemDescription={item.description}
                />
              )
            })}
          </div>
        </section>
      </div>
    </section>
  )
}
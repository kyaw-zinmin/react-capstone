import Card from "../atomics/Card"
import {menu} from '../../../data/data'

export default function Highlight(){
  return (
    <section className="highlight">
      <div className="hlgrid">
        <header className="hlheader">
          <h2 className="hlheader-h2 subtitle"
          >Specials</h2>
          <div className="hlheader-btndiv">
            <button
            className="lead-text hlheader-btn"
            >Online Menu</button>
          </div>
        </header>
        <div className="hlcards">
          {menu.map((item, index) => {
            return <Card key={index} menu={item} />
          })}
        </div>
      </div>
    </section>
  )
}
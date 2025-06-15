import Card from "../components/atomics/Card"
import { menu } from "../../data/data"

export default function Menu(){
  return (
    <section className="main menu">
      <div className="menucards">
        {menu.map((item) => {
          return(
            <Card menu={item} />
          )
        })}
      </div>
    </section>
  )
}
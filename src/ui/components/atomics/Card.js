export default function Card({key, menu}){
  return(
    <section key={key} className="card">
      <div className="cardimg">
        <img 
        className="cardimg-img"
        alt={menu.name}
        src={menu.imgPath}
        />
      </div>
      <div className="cardtext">
        <header className="cardtext-head">
          <h3 className="cardtext-h3 card-title">{menu.name}</h3>
          <span className="cardtext-price">{menu.price}</span>
        </header>
        <p className="cardtext-p p">
          {menu.description}
        </p>
      </div>
        <button className="lead-text cardbtn">
          Order a delivery
        </button>
    </section>
  )
}
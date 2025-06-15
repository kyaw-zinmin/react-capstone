export default function Hero(){
  return (
    <section className="hero">
      <div className="herotext">
        <div className="herotext-text">
          <h1 className="title herotext-h1">
            Little Lemon
          </h1>
          <h2 className="subtitle herotext-h2">Chicago</h2>
          <p className="p herotext-p">Little Lemon is a charming restaurant where the scent of sea salt mingles with zesty citrus. Housed in a former fisherman’s shack, its sunny yellow awning and hand-painted lemon murals invite guests into a warm, family-run haven.</p>
        </div>
        <div className="herotext-btndiv">
          <button className="lead-text herotext-btn">Reserve a Table</button>
        </div>
      </div>
      <div className="heroimg">
        <img 
        className="heroimg-img"
        alt="Little Lemon Restaurant"
        src="/assets/images/photos/Restaurantfood.jpg"
        />
      </div>
    </section>
  )
}
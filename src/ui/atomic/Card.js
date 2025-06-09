export default function Card(
  {
    imgPath, 
    itemTitle, 
    itemPrice, 
    itemDescription}
){
  return(
    <div
    aria-label="Card"
    className="card"
    >
      <div
      className="img-container"
      >
        <img
        aria-label={`${itemTitle} Image`}
        name={`${itemTitle} Image`}
        className="card-img"
        src={imgPath}
        alt={`${itemTitle}`}
        />
      </div>
      <div
      aria-label="Card Content"
      className="card-content"
      >
        <header
        aria-label="Card-header"
        className="card-header"
        >
          <h3
          aria-label="Card Title"
          className="card-title stick-to-text col-span-3 self-center"
          >{itemTitle}</h3>
          <span
          aria-label="Item price"
          className=""
          >{itemPrice}</span>
        </header>
        <p
        aria-label={`${itemTitle} Description`}
        className="paragraph stick-to-text row-span-6 max-h-[180px] overflow-hidden"
        >{itemDescription}</p>
        <div
        className="button-grid"
        >
          <button
          aria-label="Order a delivery button"
          className="card-button"
          type="button"
          onClick={``}
          >Order a delivery
          </button>
          <img
          aria-label="Order a delivery button icon"
          name="Order a delivery icon"
          className="button-icon"
          src={process.env.PUBLIC_URL + 'assets/images/icons/delivery.svg'}
          alt="Motorbike icon"
          />
        </div>
      </div>
    </div>
  )
}
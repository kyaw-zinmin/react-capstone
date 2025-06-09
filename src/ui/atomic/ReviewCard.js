export default function ReviewCard(){
  return(
    <div
    aria-label="Review Card Card"
    className="review-card"
    >
      <h3
      className="card-title stick-to-text col-span-1 col-start-1 row-span-1 row-start-1 self-center"
      >Rating</h3>
      <img
      aria-label="Review Card Image"
      className="review-img"
      // alt="Review Card"
      />
      <h3
      className="card-title stick-to-text col-span-1 col-start-2 row-span-1 row-start-2 self-center"
      >Name</h3>
      <p
      className="paragraph stick-to-text col-span-3 col-start-1 row-span-1 row-start-3 self-center"
      >Review text</p>
    </div>
  )
}
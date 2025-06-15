import ReviewCard from "../atomics/ReviewCard"
import { reviews } from "../../../data/data"

export default function Review(){
  return (
    <section className="review">
      <h3 className="subtitle reviewtitle">Testimonials</h3>
      <div className="reviewcards">
        {reviews.map((review, index) => {
          return(
            <ReviewCard key={index} review={review} />
          )
        })}
      </div>
    </section>
  )
}
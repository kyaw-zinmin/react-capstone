import ReviewCard from "../../atomic/ReviewCard"

export default function Testimonials(){
  return (
    <section
    className="testimonials"
    >
        <header
        aria-label="Testimonial Header"
        className="tsmonl-header"
        >Testimonials</header>
        <div
        aria-label="Testimonial List"
        className="tsmonl-list"
        >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
    </section>
  )
}
export default function ReviewCard({key,review}){
  return(
    <section key={key} className="reviewcard">
      {/* <Rating stars={review.rating} /> */}
      <h4 className="card-title reviewrating">{review.rating}/5</h4>
      <h4 className="card-title reviewname">{review.name}</h4>
      <div className="reviewimg">
        <img 
        className="reviewimg-img"
        src={review.imgPath}
        alt={'Review'} />
      </div>
      <p className="p reviewcomment">{review.comment}</p>
    </section>
  )
}
export default function Rating({number}){
  return(
    <div className="rating">
      {[...Array(number)].map(() => {
        <img />
      })}
    </div>
  )
}
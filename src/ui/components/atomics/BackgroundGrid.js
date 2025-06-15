export default function BackgroundGrid(){
  return(
    <div className='bggrid-container'>
      {[...Array(12)].map((_, index) => {
        return(
          <div key={index} className="bggrid-item"></div>
        )
      })}
    </div>
  )
}
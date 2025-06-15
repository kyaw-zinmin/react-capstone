import Hero from "../components/composites/Hero"
import Highlight from "../components/composites/Highlight"
import Review from "../components/composites/Review"
import AboutComp from "../components/composites/AboutComp"

export default function Home(){
  return(
    <main className="main home">
      <Hero />
      <Highlight />
      <Review />
      <AboutComp />
    </main>
  )
}
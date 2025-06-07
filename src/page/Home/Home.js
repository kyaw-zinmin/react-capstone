import TopNav from "../../ui/components/TopNav/TopNav.js";
import Hero from "../../ui/components/Hero/Hero.js";
import Highlights from "../../ui/components/Highlights/Highlights.js";
import Testimonials from "../../ui/components/Testimonials/Testimonials.js";
import About from "../../ui/components/About/About.js";
import BotNav from "../../ui/components/BotNav/BotNav.js";

export default function Home(){
  return(
    <main 
    aria-label="Home page"
    className="home"
    >
      <TopNav />
      <Hero/>
      <Highlights />
      <Testimonials />
      <About />
      <BotNav />
    </main>
  )
}

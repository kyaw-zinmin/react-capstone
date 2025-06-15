import { pages } from "./data/data"
import TopNav from "./ui/components/composites/TopNav"
import Main from "./ui/components/composites/Main"
import BotNav from "./ui/components/composites/BotNav"
import BackgroundGrid from "./ui/components/atomics/BackgroundGrid"


export default function App(){
  return(
    <div
    className='app'
    >
      <TopNav pages={pages}/>
      <Main pages={pages}/>
      <BotNav pages={pages}/>
      <BackgroundGrid />
    </div>
  )
}
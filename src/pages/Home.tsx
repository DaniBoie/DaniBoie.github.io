import {Greet} from "../components/Greet"
import {About} from "../components/About"
import {Projects} from "../components/Projects"

export const Home = () => {
  return (
    <div className="App">
      <Greet name={"Daniel Ayala"}/>
      <About />
      <Projects />
    </div>
  )
}
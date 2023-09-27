import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SkillsCard from "./components/SkillsCard"
import Skills from "./components/Skills"
import About from "./components/About"
import Projects from "./components/Projects"
import LiveProject from "./components/LiveProject"


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Projects />
    <LiveProject />
    </>
  )
}
export default App
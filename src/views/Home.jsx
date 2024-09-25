import About from "../components/About"
import Advertising from "../components/Advertising"
import Advertising2 from "../components/Advertising2"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Love from "../components/Love"
import Navbar from "../components/Navbar"
import Tools from "../components/Tools"
import Welcome from "../components/Welcome"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <About/>
        <Tools/>
        <Advertising/>
        <Love/>
        <Blog/>
        <Advertising2/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
import Profile from "../components/about/Profile"
import Text from "../components/about/Text"
import Text2 from "../components/about/Text2"
import Welcome from "../components/about/Welcome"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <Text/>
        <Profile/>
        <Text2/>
        <Footer/>
    </div>
  )
}

export default About
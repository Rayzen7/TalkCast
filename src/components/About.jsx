/* eslint-disable react/no-unescaped-entities */
import Card from "./ui/Card"
import './style.css'

const About = () => {
  return (
    <div className="h-auto w-full lg:mt-28 mt-12">
      <div className="flex lg:flex-row flex-col justify-around items-center lg:gap-36 gap-16">
        <div className="lg:text-start text-center lg:px-0 px-8">
          <p className="font-poppins1 uppercase text-[15px]">our network</p>
          <h1 className="font-poppins lg:text-[25px] text-[17px]">125,000 podcasts listened to more than <br /> 400 million times every month.</h1>
        </div>
        <a href=""><button className="lg:text-[15px] text-[10px] font-poppins1 px-7 py-3 border-[1px] rounded-full border-black">Learn more</button></a>
      </div>
      <div className="lg:mt-12 mt-20">
        <Card/>
      </div>
      <div className="flex lg:flex-row flex-col justify-around lg:items-start lg:mt-20 mt-12 items-center lg:text-start text-center lg:px-0 px-5 lg:gap-0 gap-5">
        <h1 className="font-poppins lg:text-[22px] text-[16px] lg:w-[500px] w-full">Our vision is to learn, work, build. Bringing your digital business dreams come true with professionalism.</h1>
        <div className="flex flex-col gap-12">
          <h1 className="font-poppins lg:text-[22px] text-[16px lg:w-[500px] w-full">With passion we created this Code, Design and Concept. We created this website to help your brand stand out. Don't worry about things, just leave it to us!</h1>
          <Link to='/about'><button className="p-3 lg:h-[130px] lg:w-[130px] h-[100px] w-[100px] lg:text-[20px] text-[15px] font-poppins rounded-full bg-pinkAbout cursor-pointer hover:scale-90 hover:opacity-90 transition-all ease-in-out duration-300">About Us</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About

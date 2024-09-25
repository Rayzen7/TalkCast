/* eslint-disable react/no-unescaped-entities */
import { dataTools } from "../data/Datalocal"

const Tools = () => {
  return (
    <div className="bg-pink w-full lg:h-[110vh] h-auto pt-24 lg:pb-0 pb-56">
        <div className="text-center lg:px-0 px-4">
          <h1 className="font-poppins lg:text-[35px] text-[27px]">The tools you need</h1>
          <p className="font-poppins2 lg:w-[700px] w-full pt-2 mx-auto lg:text-[17px] text-[13px]">Book host-read sponsorships or run pre-recorded ads using Acast's self-serve advertising platform today. <span className="underline cursor-pointer">Read More</span></p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-8 mt-10">
        { dataTools.map((item, i) => (
          <div key={i} className="">            
              <div style={{backgroundColor:`${item.color}`}}
                className="w-[240px] h-[330px] transition-all duration-300 hover:w-[300px] flex flex-col justify-between rounded-xl cursor-pointer group">
                <div className="text-white mx-auto pt-5">
                  <img src={item.icon} alt="" className="w-[60px] h-auto pb-2"/>
                  <h1 className="font-poppins text-[17px]">{item.title}</h1>
                  <p className="text-[14px] w-[200px]">{item.desc}</p>
                </div>
                <img src={item.img} alt="" className="h-auto w-[140px] mx-auto translate-x-0 transition-all duration-300 group-hover:translate-x-16"/>
              </div>
          </div>
        )) }
        </div>
    </div>
  )
}

export default Tools
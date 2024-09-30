import advertising from "/img/advertising2.png";

const Advertising2 = () => {
  return (
    <div className="lg:h-[70vh] w-full h-auto lg:pb-0 pb-20" id="advertise">
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 lg:mt-28 gap-12 mt-20">
            <img src={advertising} alt="" className="lg:w-[350px] w-[310px] h-auto"/>
            <div className="flex flex-col lg:items-start justify-center items-center lg:text-start text-center lg:px-0 px-5">
                <p className="font-poppins text-[15px]">ADVERTISING</p>
                <h1 className="font-poppins lg:text-[30px] text-[20px] lg:w-[500px] w-full">The easiest way to record, edit and mix your podcast</h1>
                <p className="font-poppins2 lg:text-[16px] text-[13px] lg:w-[520px] w-full mt-3">Get free access to Podcastle to create your episodes, right from your web browser.</p>
                <a href=""><button className="lg:mt-8 mt-24 px-6 py-3 bg-yellow text-black font-poppins text-[12px] rounded-full">Learn more</button></a>
            </div>
        </div>
    </div>
  )
}

export default Advertising2
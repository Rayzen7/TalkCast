/* eslint-disable react/no-unescaped-entities */
import advertising from '/img/advertising.png';

const Advertising = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center bg-blackGray w-full h-[80vh]'>
        <div className='text-white lg:pl-20 pl-0 lg:text-start text-center lg:pb-0 pb-36 lg:pt-0 pt-9'>
            <p className='uppercase lg:text-[22px] text-[18px]'>advertising</p>
            <h1 className='lg:text-[32px] text-[20px] font-poppins lg:w-[500px] w-full lg:px-0 px-6'>Podcast advertising that delivers results to shout about</h1>
            <p className='font-poppins2 lg:w-[700px] w-full lg:text-[17px] text-[13px] pt-2 lg:px-0 px-8'>With Acast, you can grow your brand and business by reaching your perfect audience on any podcast listening app Ready to get started? Book host-read sponsorships or run pre-recorded ads using Acast's self-serve advertising platform today,</p>
            <a href=""><button className='mt-10 bg-yellow text-black font-poppins1 text-[14px] outline-none px-8 py-2 rounded-full
            hover:bg-transparent hover:border-[1px] hover:border-yellow hover:text-white transition-all duration-300 lg:mx-0 mx-auto'>Get Started</button></a>
        </div>
        <img src={advertising} alt="" className='h-[80vh]'/>
    </div>
  )
}

export default Advertising
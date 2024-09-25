import podcastPng from '/img/Podcast.png';
import leftPerson from '/img/ringPerson.png';
import welcomekontent from '/img/welcomeText.png';
import radio from '/img/radio.png';
import './Style.css';

const Welcome = () => {
  return (
    <div className='lg:h-auto h-[90vh] w-full bg-pink flex flex-col pt-[110px]'>
        <img src={podcastPng} alt="" className='block mx-auto lg:w-[900px] h-auto animate-scaleIn w-[280px]'/>
        <div className='flex justify-center gap-20 items-center lg:mt-12 mt-8'>
            <img src={leftPerson} alt="" className='w-[400px] h-auto display'/>
            <div className='font-poppins'>
                <div className='flex lg:justify-start items-center lg:gap-7 gap-3 justify-center'>
                    <h1 className='lg:text-[60px] text-[25px] text-center'>THE HOME</h1>
                    <img src={welcomekontent} alt="" className='lg:w-[200px] h-auto w-[120px]'/>
                </div>
                <h1 className='flex lg:text-[60px] text-[25px] items-center justify-center gap-2 lg:pt-0 pt-2'>OF P <img src={radio} alt="" className='lg:w-[150px] lg:h-[70px] w-[100px] h-[40px]'/>DCASTING</h1>
                <div className=''>
                    <p className='font-poppins2 lg:w-[600px] lg:pt-4 pt-8 text-[15px] w-full lg:px-0 px-7 lg:text-start text-center'>Whether you are looking to start a new podcast or move your existing podcast, Acast has you covered. Create and publish to every podcast app there is - including apple podcasts, spotify and amazon music</p>
                    <a href=""><button className='px-9 cursor-pointer py-3 bg-yellow outline-none font-poppins rounded-full lg:mt-9 mt-20 transition-all duration-300
                    hover:bg-white hover:border-yellow hover:border-2 border-yellow border-2 block lg:mx-0 mx-auto'>Start listening</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome
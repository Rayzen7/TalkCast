import khadafi from '/img/khadafi.png';
import setio from '/img/setio.png';
import rasya from '/img/rasya.png';
import sekolah from '/img/sekolah.png';
import { useState, useEffect } from 'react';

const Welcome = () => {
    const [offsetY, setOffetY] = useState(0);

    const handleScroll = () => {
        setOffetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div
      className='w-full h-screen bg-center bg-cover flex flex-col justify-center items-center relative -z-20'
      style={{ backgroundImage: `url(${sekolah})` }}>
      <div className='flex flex-col justify-center items-center text-white font-poppins'>
        <h1 className='lg:text-[100px] text-[35px] lg:translate-y-[70%] translate-y-[60%]'>Discover More</h1>
        <div className='flex justify-center items-center lg:gap-20 gap-5 relative z-30'
        style={{ transform: `translateY(${offsetY * -0.5}px)`}}>
            <img src={khadafi} alt="" className='lg:w-[300px] w-[90px] h-auto'/>
            <img src={setio} alt="" className='lg:w-[300px] w-[90px] h-auto'/>
            <img src={rasya} alt="" className='lg:w-[300px] w-[90px] h-auto'/>
        </div>
        <h1 className='lg:text-[90px] text-[35px] translate-y-[-50%] relative z-50'>About Our Team</h1>
      </div>
    </div>
  );
};

export default Welcome;

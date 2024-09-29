import logo from '/img/icon.png';
import idn from '/img/idn.png';
import usa from '/img/mly.png';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('IDN');

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country); 
        setShowDropdown(false); 
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const ulClass = 'flex lg:flex-row flex-col lg:items-center items-start gap-12 text-[15px] lg:justify-center font-poppins2 text-gray cursor-pointer lg:relative justify-start bg-white absolute top-0 lg:w-full right-0 lg:w-0 w-[200px] lg:h-0 h-[100vh] lg:p-0 pt-32 pl-16';
    const visibilityClass = showMenu ? 'animate-moveLeft' : 'animate-moveRight';

    return (
        <div className='flex justify-between items-center fixed w-full h-[11vh] z-20 lg:px-12 px-6 bg-white'>
            <div className='flex items-center justify-center gap-2'>
                <img src={logo} alt="Logo" className='lg:w-[50px] w-[40px] h-auto'/>
                <h1 className='font-poppins lg:text-[21px] text-[19px]'>TalkCast</h1>
            </div>
            <div className={`${ulClass} ${visibilityClass}`}>
                <a href="/" className='hover:text-yellow transition-all duration-300'>Home</a>
                <a href="" className='hover:text-yellow transition-all duration-300'>About Us</a>
                <a href="" className='hover:text-yellow transition-all duration-300'>Podcast</a>
                <a href="" className='hover:text-yellow transition-all duration-300'>Music</a>
                <a href="" className='hover:text-yellow transition-all duration-300'>Advertise</a>
            </div>
            <div className={`flex items-center justify-center gap-2 lg:gap-9 lg:relative lg:bottom-0 bottom-[-600%] absolute right-0 ${visibilityClass}`}>
                <div className='relative'>
                    <div className='flex items-center lg:mt-0 mt-2 cursor-pointer' onClick={toggleDropdown}>
                        <img src={selectedCountry === 'IDN' ? idn : usa} alt="Country" className='lg:w-[50px] w-[35px] h-auto'/>
                        <i className='bx bx-chevron-down text-[22px] text-black'></i>
                    </div>
                    {showDropdown && (
                        <div className='absolute flex flex-col bg-white shadow-lg rounded-lg top-12 right-0 '>
                            <button className='p-2 hover:bg-gray-200' onClick={() => handleCountrySelect('IDN')}>
                                <img src={idn} alt="Indonesia" className='w-[30px] h-auto'/> Indonesia
                            </button>
                            <button className='p-2 hover:bg-gray-200 pr-10' onClick={() => handleCountrySelect('MLY')}>
                                <img src={usa} alt="USA" className='w-[30px] h-auto'/> USA
                            </button>
                        </div>
                    )}
                </div>
                <a href=""><button className='bg-yellow font-poppins lg:text-[16px] text-[14px] px-5 lg:px-7 py-2 rounded-full lg:mr-0 mr-4'>Logout</button></a>
            </div>
            <i className="bx bx-list-ul lg:hidden block text-[24px] cursor-pointer z-40" onClick={toggleMenu}></i>
        </div>
    );
};

export default Navbar;

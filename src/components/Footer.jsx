import logo from '/img/icon.png';

const Footer = () => {
  return (
    <div className='bg-black w-full lg:h-[70vh] h-auto text-white flex lg:flex-row flex-col justify-around lg:items-start items-center lg:pt-28 pt-16 lg:pb-0 pb-10'>
        <div className='flex flex-col gap-3'>
            <div className='flex lg:justify-start justify-center items-center gap-2'>
                <img src={logo} alt="" className='w-[80px] h-auto'/>
                <h1 className='font-poppins text-[23px]'>TALKCAST</h1>
            </div>
            <p className='font-poppins2 text-[13px] w-[300px] lg:text-start text-center lg:pb-0 pb-12'>You can grow your brand and business by reaching your perfect audience on any podcast listening app.</p>
        </div>
        <div className='font-poppins2 lg:pb-0 pb-12'>
            <h1 className='font-poppins lg:text-[20px] text-[17px] mb-7'>Company</h1>
            <div className='flex flex-col text-[12px] gap-4'>
                <p>Our Story</p>
                <p>Podcasting</p>
                <p>Advertising</p>
                <p>News</p>
                <p>Legal</p>
            </div>
        </div>
        <div className='lg:pb-0 pb-12'>
            <h1 className='font-poppins text-[20px] mb-7'>Support</h1>
            <div className='flex flex-col text-[12px] gap-4'>
                <p>Security</p>
                <p>Partnership</p>
                <p>Information</p>
                <p>Investor</p>
                <p>Affilates</p>
            </div>
        </div>
        <div>
            <h1 className='font-poppins text-[20px] mb-7 lg:text-start text-center'>Join Our letters</h1>
            <div className='flex justify-center items-center'>
                <input type="email" className='outline-none text-[12px] h-[50px] rounded-s-full bg-BlackYellow pl-5 w-[180px]' placeholder='Enter your email address'/>
                <a href="" className='bg-BlackYellow rounded-e-full'><button className='h-[50px] bg-yellow px-5 font-poppins rounded-full text-BlackYellow text-[12px]'>Subscribe</button></a>
            </div>
            <div className='flex lg:justify-start justify-center items-center gap-3 mt-10 cursor-pointer'>
                <i className='bx bxl-twitter bg-grayIcon p-2 text-[25px] rounded-full' style={{color:"#ffffff"}}></i>
                <i className='bx bxl-facebook-circle bg-grayIcon p-2 text-[25px] rounded-full' style={{color:"#ffffff"}}></i>
                <i className='bx bxl-instagram bg-grayIcon p-2 text-[25px] rounded-full' style={{color:"#ffffff"}}></i>
                <i className='bx bxl-linkedin bg-grayIcon p-2 text-[25px] rounded-full' style={{color:"#ffffff"}}></i>
            </div>
        </div>
    </div>
  )
}

export default Footer
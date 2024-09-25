/* eslint-disable react/no-unescaped-entities */
import contact from '/img/contact.png';
import './style.css';

const Contact = () => {
  return (
    <div className='w-full lg:h-[100vh] h-auto lg:mt-0 mt-12 lg:pb-0 pb-36'>
        <div className='w-[90vw] lg:h-[90vh] h-auto bg-pink mx-auto rounded-xl flex lg:flex-row flex-col justify-center items-center lg:px-3 px-5 lg:pb-0 pb-20'>
            <div>
                <h1 className='font-poppins lg:text-[32px] text-[15px] lg:text-start text-center lg:w-[600px] w-full lg:mb-0 mb-16'>Can't find what you're looking for? Don’t worry we’re here to help.</h1>
                <div className='mt-4'>
                    <div className='flex justify-between items-center lg:w-[500px] w-full'>
                        <p className='font-poppins2 lg:text-[16px] text-[13px]'>I'm</p>
                        <p className='font-poppins flex items-center gap-2 lg:text-[16px] text-[13px]'>A Podcaster <span><i className='bx bx-chevron-down lg:text-[30px] text-[20px]'></i></span></p>
                    </div>
                    <div className='lg:w-[500px] w-full bg-gray h-[1px] mt-2'></div>
                </div>
                <div className='mt-4'>
                    <div className='flex justify-between items-center lg:w-[500px] w-full'>
                        <p className='font-poppins2 lg:text-[16px] text-[13px]'>Interested in</p>
                        <p className='font-poppins flex items-center gap-2 lg:text-[16px] text-[13px]'>Growing My Audiance <span><i className='bx bx-chevron-down lg:text-[30px] text-[20px]'></i></span></p>
                    </div>
                    <div className='lg:w-[500px] w-full bg-gray h-[1px] mt-2'></div>
                </div>
                <a href=""><button className='lg:w-[500px] w-[250px] bg-yellow px-6 py-3 cursor-pointer font-poppins1 text-[15px] rounded-full mt-32 block mx-auto lg:mx-0 lg:none'>Show me what you’ve got</button></a>
            </div>
            <div className='contactImg'>
                <img src={contact} alt="" className='w-[550px] h-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Contact
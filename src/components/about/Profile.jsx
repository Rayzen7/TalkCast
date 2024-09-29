import khadafi from '/img/khadafi.png';
import setio from '/img/setio.png';
import rasya from '/img/rasya.png';

const Profile = () => {
  return (
    <div className='w-full h-auto mt-20 flex flex-col justify-center items-center lg:pb-20 pb-12'>
        <h1 className='lg:text-[65px] text-[38px] text-center font-poppins'>Our Team</h1>
        <div className='mt-20 flex flex-col gap-20'>
            <div className='flex lg:flex-row flex-col items-center gap-12'>
                <img src={setio} alt="" className='w-[170px] h-auto'/>
                <div className='lg:text-start text-center lg:px-0 px-5'>
                    <h1 className='lg:text-[30px] text-[25px] font-poppins'>Setio Nugraha</h1>
                    <p className='lg:text-[17px] text-[15px] font-poppins2'>Team Leader, Front-End Developer, & Back-End Developer</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col items-center gap-12'>
                <img src={rasya} alt="" className='w-[170px] h-auto'/>
                <div className='lg:text-start text-center lg:px-0 px-8'>
                    <h1 className='lg:text-[30px] text-[25px] font-poppins'>Muhammad Rasya Putra Wantoro</h1>
                    <p className='lg:text-[17px] text-[15px] font-poppins2'>Graphic Design</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col items-center gap-12'>
                <img src={khadafi} alt="" className='w-[170px] h-auto'/>
                <div className='lg:text-start text-center lg:px-0 px-5'>
                    <h1 className='lg:text-[30px] text-[25px] font-poppins'>Muhammad Khadafi</h1>
                    <p className='lg:text-[17px] text-[15px] font-poppins2'>UI/UX Designer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
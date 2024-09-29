import blog1 from '/img/blog1.png';
import blog2 from '/img/blog2.png';
import blog3 from '/img/blog3.png';

const Blog = () => {
  return (
    <div className='bg-pink flex lg:flex-col flex-col-reverse w-full lg:h-[105vh] h-auto lg:pb-0 pb-24'>
        <div className='flex lg:flex-row flex-col lg:justify-around lg:items-end justify-center items-center lg:px-0 px-8 lg:gap-0 gap-3 lg:pt-0 pt-10'>
            <div className='lg:text-start text-center'>
                <p className='font-poppins'>BLOG</p>
                <h1 className='font-poppins lg:text-[30px] text-[20px] lg:w-[500px] w-full'>Inspiring, insightful stories from the acasta community</h1>
            </div>
            <div className='lg:text-start text-center'>
                <p className='font-poppins2 lg:text-[14px] text-[12px] lg:w-[320px] w-full'>Podcaster stories, learning resources, news and views from across the Acast community.</p>
                <a href=""><button className='font-poppins1 px-5 py-2 rounded-full lg:mt-3 mt-10 border-[1px] border-black text-[12px]'>Read more</button></a>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col justify-center items-center gap-6 mt-12'>
            <img src={blog1} alt="" className='lg:w-[470px] h-auto w-[300px]'/>
            <img src={blog2} alt="" className='lg:w-[340px] w-[300px] h-auto'/>
            <img src={blog3} alt="" className='lg:w-[340px] w-[300px] h-auto'/>
        </div>
        <div className='mt-6 lg:ml-36 ml-0 lg:text-start text-center lg:px-0 px-8'>
            <h1 className='font-poppins lg:text-[24px] text-[22px]'>How to make money podcasting.</h1>
            <p className='font-poppins2 text-[14px] lg:w-[400px] w-full lg:pt-0 pt-2'>A complete guide to podcast monetization, including ads, sponsorships and subscriptions.</p>
        </div>
    </div>
  )
}

export default Blog
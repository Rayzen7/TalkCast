import card1 from '/img/card1.png';
import card2 from '/img/card2.png';
import card3 from '/img/card3.png';
import card4 from '/img/card4.png';
import card5 from '/img/card5.png';

const Card = () => {
  return (
    <div className='overflow-hidden'>
      <div className='flex justify-center items-center gap-6 animate-scroll'>
        <img src={card1} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card2} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card3} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card4} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card5} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card1} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card2} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card3} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card4} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
        <img src={card5} alt="" className='lg:w-[240px] w-[170px] h-auto'/>
      </div>
    </div>
  );
}

export default Card;

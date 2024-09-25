/* eslint-disable react/no-unescaped-entities */
import { love } from "../data/Datalocal";
import loveImg from "/img/love1.png";

const Love = () => {
  return (
    <div className="mt-20 w-full lg:h-[100vh] h-auto lg:pb-0 pb-20">
      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-10">
        <div
          className="w-[300px] h-[415px] flex flex-col justify-between items-center rounded-xl"
          style={{ backgroundColor: "#FF854B" }}
        >
          <div className="text-white pt-10">
            <p className="text-[12px]">Equity mates</p>
            <h1 className="text-[22px] font-poppins w-[200px]">
              Equity mates love about acast's
            </h1>
          </div>
          <img src={loveImg} alt="" className="w-[360px] h-auto" />
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <div className="flex lg:flex-row mx-auto lg:mx-0 flex-col justify-center items-center gap-9">
            {love.map((item, i) => (
              <div
                key={i}
                className="lg:w-[270px] w-[300px] h-[300px] flex flex-col justify-between items-center rounded-xl cursor-pointer"
                style={{ backgroundColor: `${item.color2}` }}
              >
                <div className="text-white pt-7">
                  <p className="text-[15px] lg:text-start text-center">{item.text2}</p>
                  <h1 className="text-[27px] font-poppins">{item.title2}</h1>
                </div>
                <img src={item.img2} alt="" className="w-[230px] h-auto" />
              </div>
            ))}
          </div>
          <div className="lg:text-start text-center lg:px-0 px-8">
            <h1 className="lg:text-[30px] text-[22px] font-poppins">
              Why creators love acasta
            </h1>
            <p className="lg:w-[550px] w-full font-poppins2 lg:text-[15px] text-[12px] pt-1">
              Creators love Acasta for its user-friendly interface,
              comprehensive analytics, and powerful monetization features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Love;

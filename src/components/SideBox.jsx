import { FaAngellist } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const UpcomingEvent = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[500px] mt-7">
      <div className="w-full bg-[#fbfbf9] h-[174px] rounded-sm shadow-xl transition-shadow">
        <div className="flex justify-between gap-5 ml-7 mt-7">
          <h2 className="text-[18px] font-normal">Upcoming Event</h2>
          <div className="w-16 h-8 bg-[#aa97cd] rounded-2xl flex items-center justify-center text-white mr-7">
            34%
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-baseline ml-7">
            <h1 className="text-[44px] font-extralight md:text-[36px]">
              45
            </h1>
            <p className="text-[#6c757d] font-extralight text-sm md:text-base">
              Competitors
            </p>
          </div>
          <FaAngellist className="text-[#a389d4] mr-5 text-[50px] mt-6" />
        </div>
        <div className="flex justify-between ml-7">
          <p className="text-[#6c757d] font-normal text-sm md:text-base">
            You can participate in event
          </p>
        </div>
      </div>

      <div className="flex items-center w-full h-[124px] bg-[#fbfbf9] rounded-sm shadow-xl transition-shadow mt-7">
        <div className="ml-7 flex items-center gap-6">
          <MdElectricBolt className="text-[30px] text-[#1de9b6]" />
          <div>
            <div className="text-[26px] font-light">235</div>
            <div className="text-[14px] text-[#888] font-normal">TOTAL IDEAS</div>
          </div>
        </div>
      </div>
      
      <hr className="text-[#888] w-full my-2" />
      
      <div className="flex items-center w-full h-[124px] bg-[#fbfbf9] rounded-sm shadow-xl transition-shadow">
        <div className="ml-7 flex items-center gap-6">
          <GrLocation className="text-[30px] text-[#04a9f5]" />
          <div>
            <div className="text-[26px] font-light">26</div>
            <div className="text-[14px] text-[#888] font-normal">TOTAL LOCATIONS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;

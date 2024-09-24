import { LuHome } from "react-icons/lu";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import './Box.css';

const Box = () => {
  return (
    <div className="mt-14 flex flex-col gap-3">
      <h5 className="text-[20px]">Dashboard</h5>
      <div className="flex gap-3 items-center">
        <LuHome size={16} className="text-[#3f4d67]" />/
        <div className="font-semibold text-[#111]">Dashboard</div>
      </div>
      <div className="flex flex-col md:flex-row mt-4 gap-8">
        <div className="w-full md:w-[33.3%] bg-[#fbfbf9] h-[174px] rounded-sm shadow-xl transition-shadow">
          <div className="flex flex-col gap-5 ml-7 mt-7">
            <p>Daily Sales</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-[26px] font-light">
                <FaArrowUp size={27} className="text-[#1de9b6]" /> $249.95
              </div>
              <div className="text-[#888] mr-8">50%</div>
            </div>
            <div className="line w-[50%] h-2"></div>
          </div>
        </div>
        <div className="w-full md:w-[31%] bg-[#fbfbf9] h-[174px] rounded-lg shadow-xl transition-shadow">
          <div className="flex flex-col gap-5 ml-7 mt-7">
            <p>Monthly Sales</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-[26px] font-light">
                <FaArrowDown size={27} className="text-[#f44236]" /> $2,942.32
              </div>
              <div className="text-[#888] mr-8">36%</div>
            </div>
            <div className="line w-[36%] h-2"></div>
          </div>
        </div>
        <div className="w-full md:w-[31%] bg-[#fbfbf9] h-[174px] rounded-lg shadow-xl transition-shadow">
          <div className="flex flex-col gap-5 ml-7 mt-7">
            <p>Yearly Sales</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-[26px] font-light">
                <FaArrowUp size={27} className="text-[#1de9b6]" /> $8,638.32
              </div>
              <div className="text-[#888] mr-8">70%</div>
            </div>
            <div className="line w-[70%] h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

import { LuHome } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";

const Box = () => {
  return (
    <div className="mt-14 pl-[15.5%] flex flex-col gap-3">
      <h5 className="text-[20px]">Dashboard</h5>
      <div className="flex gap-3 items-center">
        <LuHome size={16} className="text-[#3f4d67]" />/
        <div className=" font-semibold text-[#111]">Dashboard</div>
      </div>
      <div className="flex mt-4">
        <div className="w-[31%] bg-[#f0f2f5] h-[174px] rounded-lg shadow-xl transition-shadow">
            <div className="flex flex-col gap-5 ml-7 mt-7">
            <p>Daily Sales</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-[26px] font-light"><FaArrowUp size={27} className="text-[#1de9b6]"/> $249.95</div>
                <div className="text-[#888] mr-8">50%</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

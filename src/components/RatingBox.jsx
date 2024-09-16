import { FaStar } from "react-icons/fa";
import { IoCaretUp } from "react-icons/io5";

const RatingBox = () => {
  return (
    <div className="flex flex-col w-[41.6%]  pl-[15.5%]">
      <div className="w-full mt-4 bg-[#fbfbf9] h-[440px] rounded-sm shadow-xl transition-shadow border mb-12">
        <div className="ml-7 mt-4 text-[17px] text-[#000] font-normal">
          Rating
        </div>
        <hr className="w-full mt-4" />
        <div className="flex items-center justify-between ml-7 mt-6">
          <div className="flex items-center gap-3">
            <h2 className="text-[45px] font-light text-[#111]">4.7</h2>
            <FaStar className="size-[10px] text-[#f4c22b]" />
          </div>
          <div className="flex items-end gap-2 mr-4">
            <h6 className="text-[16px] text-[#111] font-normal">0.4</h6>
            <IoCaretUp className="text-[#1de9b6] text-[18px]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[100%]">
            <div className=" flex flex-col gap-3 ml-7 mt-4">
              <div className="flex items-baseline gap-3">
                <FaStar className="size-[10px] text-[#f4c22b]" />
                <h6 className="text-[16px] font-normal text-[#111]">5</h6>
              </div>
              <div className="line w-[75%] h-[6px]"></div>
            </div>
          </div>
          <h5 className="text-[16px] font-normal mr-5">384</h5>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[100%]">
            <div className=" flex flex-col gap-3 ml-7 mt-4">
              <div className="flex items-baseline gap-3">
                <FaStar className="size-[10px] text-[#f4c22b]" />
                <h6 className="text-[16px] font-normal text-[#111]">4</h6>
              </div>
              <div className="line w-[40%] h-[6px]"></div>
            </div>
          </div>
          <h5 className="text-[16px] font-normal mr-5">145</h5>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[100%]">
            <div className=" flex flex-col gap-3 ml-7 mt-4">
              <div className="flex items-baseline gap-3">
                <FaStar className="size-[10px] text-[#f4c22b]" />
                <h6 className="text-[16px] font-normal text-[#111]">3</h6>
              </div>
              <div className="line w-[28%] h-[6px]"></div>
            </div>
          </div>
          <h5 className="text-[16px] font-normal mr-5">24</h5>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[100%]">
            <div className=" flex flex-col gap-3 ml-7 mt-4">
              <div className="flex items-baseline gap-3">
                <FaStar className="size-[10px] text-[#f4c22b]" />
                <h6 className="text-[16px] font-normal text-[#111]">2</h6>
              </div>
              <div className="line w-[15%] h-[6px]"></div>
            </div>
          </div>
          <h5 className="text-[16px] font-normal mr-5">1</h5>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[100%]">
            <div className=" flex flex-col gap-3 ml-7 mt-4">
              <div className="flex items-baseline gap-3">
                <FaStar className="size-[10px] text-[#f4c22b]" />
                <h6 className="text-[16px] font-normal text-[#111]">1</h6>
              </div>
            </div>
          </div>
          <h5 className="text-[16px] font-normal mr-5">0</h5>
        </div>
      </div>
      </div>
  );
};

export default RatingBox;

import User1 from "../Assets/user1.png";
import User2 from "../Assets/user2.png";
import User3 from "../Assets/user3.png";
import User4 from "../Assets/user4.png";
import User5 from "../Assets/user5.png";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const UserGrow = () => {
  return (
    <div className="flex flex-col w-full md:w-[90%] h-[450px] mr-2 mb-5">
      <div className="flex items-center gap-5 cursor-pointer mb-4">
        <div className="flex items-center justify-center w-20 bg-[#fbfbf9] shadow-xl text-[14px] pb-3 border-t border-l border-r">
          Today
        </div>
        <h5 className="text-[#888] text-[14px]">This Week</h5>
        <h5 className="text-[#888] text-[14px] pl-4">All</h5>
      </div>
      <div className="w-full h-full bg-[#fbfbf9] rounded-sm shadow-xl transition-shadow border overflow-y-auto">
        <div className="flex flex-col divide-y divide-[#e0e0e0]">
          <div className="flex items-center justify-between py-4 px-7">
            <div className="flex items-center gap-4">
              <img className="size-10" src={User1} alt="" />
              <div className="text-[16px]">Isabella Christensen</div>
            </div>
            <div className="flex items-center gap-2">
              <IoCaretUp className="text-[#1de9b6] text-[20px]" />
              <h5 className="text-[#888] text-[16px]">3784</h5>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 px-7">
            <div className="flex items-center gap-4">
              <img className="size-10" src={User2} alt="" />
              <div className="text-[16px]">Mathilde Andersen</div>
            </div>
            <div className="flex items-center gap-2">
              <IoCaretUp className="text-[#1de9b6] text-[20px]" />
              <h5 className="text-[#888] text-[16px]">3544</h5>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 px-7">
            <div className="flex items-center gap-4">
              <img className="size-10" src={User3} alt="" />
              <div className="text-[16px]">Karla Sorensen</div>
            </div>
            <div className="flex items-center gap-2">
              <IoCaretDown className="text-[#f44236] text-[20px]" />
              <h5 className="text-[#888] text-[16px]">3784</h5>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 px-7">
            <div className="flex items-center gap-4">
              <img className="size-10" src={User4} alt="" />
              <div className="text-[16px]">Ida Jorgensen</div>
            </div>
            <div className="flex items-center gap-2">
              <IoCaretDown className="text-[#f44236] text-[20px]" />
              <h5 className="text-[#888] text-[16px]">2739</h5>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 px-7">
            <div className="flex items-center gap-4">
              <img className="size-10" src={User5} alt="" />
              <div className="text-[16px]">Albert Andersen</div>
            </div>
            <div className="flex items-center gap-2">
              <IoCaretUp className="text-[#1de9b6] text-[20px]" />
              <h5 className="text-[#888] text-[16px]">3784</h5>
            </div>
          </div>
          {/* Repeat for additional users as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserGrow;

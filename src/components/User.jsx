import User1 from "../Assets/user1.png";
import User2 from "../Assets/user2.png";
import User3 from "../Assets/user3.png";
import User4 from "../Assets/user4.png";
import User5 from "../Assets/user5.png";
import { FaCircle } from "react-icons/fa";

const User = () => {
  return (
    <div className="mt-8 pl-[15.5%]">
      <div className="w-[113.3%] h-full bg-[#fbfbf9] rounded-sm shadow-xl transition-shadow border">
        <div className="ml-7 mt-6 text-[17px] font-normal">Recent Users</div>
        <hr className="w-full mt-5" />
        <div className="flex flex-col ">
          <div className="flex gap-8 ml-7 mt-6 ">
            <img className=" size-10" src={User1} alt="" />
            <div className="flex flex-col gap-0.5">
              <div className="text-[14px]">Isabella Christensen</div>
              <div className="text-[14px] text-[#888]">
                Lorem Ipsum is simply dummy text of…
              </div>
            </div>
            <div className="flex items-center ml-48">
              <div className="flex items-center gap-4">
                <FaCircle className="text-[#1de9b6] text-[10px]" />
                <div className="text-[#6c757d] text-[14px] font-normal">
                  11 MAY 12:56
                </div>
              </div>
            </div>
            <div className=" flex items-center ml-20">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center w-[57px] size-[26px] shadow-xl rounded-[15px] bg-[#987ec8] text-[12px] text-white">
                  Reject
                </button>
                <button className="flex items-center justify-center w-[69px] size-[26px] shadow-xl rounded-[15px] bg-[#67d2d4] text-[12px] text-white">
                  Approve
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full mt-5" />
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-8 ml-7 mt-6 ">
            <img className=" size-10" src={User2} alt="" />
            <div className="flex flex-col gap-0.5">
              <div className="text-[14px]">Mathilde Andersen</div>
              <div className="text-[14px] text-[#888]">
                Lorem Ipsum is simply dummy text of…
              </div>
            </div>
            <div className="flex items-center ml-48">
              <div className="flex items-center gap-4">
                <FaCircle className="text-[#f44236] text-[10px]" />
                <div className="text-[#6c757d] text-[14px] font-normal">
                11 MAY 10:35
                </div>
              </div>
            </div>
            <div className=" flex items-center ml-20">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center w-[57px] size-[26px] shadow-xl rounded-[15px] bg-[#987ec8] text-[12px] text-white">
                  Reject
                </button>
                <button className="flex items-center justify-center w-[69px] size-[26px] shadow-xl rounded-[15px] bg-[#67d2d4] text-[12px] text-white">
                  Approve
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full mt-5" />
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-8 ml-7 mt-6 ">
            <img className=" size-10" src={User3} alt="" />
            <div className="flex flex-col gap-0.5">
              <div className="text-[14px]">Karla Sorensen</div>
              <div className="text-[14px] text-[#888]">
                Lorem Ipsum is simply dummy text of…
              </div>
            </div>
            <div className="flex items-center ml-48">
              <div className="flex items-center gap-4">
                <FaCircle className="text-[#1de9b6] text-[10px]" />
                <div className="text-[#6c757d] text-[14px] font-normal">
                9 MAY 17:38
                </div>
              </div>
            </div>
            <div className=" flex items-center ml-20">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center w-[57px] size-[26px] shadow-xl rounded-[15px] bg-[#987ec8] text-[12px] text-white">
                  Reject
                </button>
                <button className="flex items-center justify-center w-[69px] size-[26px] shadow-xl rounded-[15px] bg-[#67d2d4] text-[12px] text-white">
                  Approve
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full mt-5" />
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-8 ml-7 mt-6 ">
            <img className=" size-10" src={User4} alt="" />
            <div className="flex flex-col gap-0.5">
              <div className="text-[14px]">Ida Jorgensen</div>
              <div className="text-[14px] text-[#888]">
                Lorem Ipsum is simply dummy text of…
              </div>
            </div>
            <div className="flex items-center ml-48">
              <div className="flex items-center gap-4">
                <FaCircle className="text-[#f44236] text-[10px]" />
                <div className="text-[#6c757d] text-[14px] font-normal">
                19 MAY 12:56
                </div>
              </div>
            </div>
            <div className=" flex items-center ml-20">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center w-[57px] size-[26px] shadow-xl rounded-[15px] bg-[#987ec8] text-[12px] text-white">
                  Reject
                </button>
                <button className="flex items-center justify-center w-[69px] size-[26px] shadow-xl rounded-[15px] bg-[#67d2d4] text-[12px] text-white">
                  Approve
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full mt-5" />
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-8 ml-7 mt-6 ">
            <img className=" size-10" src={User5} alt="" />
            <div className="flex flex-col gap-0.5">
              <div className="text-[14px]">Albert Andersen</div>
              <div className="text-[14px] text-[#888]">
                Lorem Ipsum is simply dummy text of…
              </div>
            </div>
            <div className="flex items-center ml-48">
              <div className="flex items-center gap-4">
                <FaCircle className="text-[#1de9b6] text-[10px]" />
                <div className="text-[#6c757d] text-[14px] font-normal">
                21 July 12:56
                </div>
              </div>
            </div>
            <div className=" flex items-center ml-20">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center w-[57px] size-[26px] shadow-xl rounded-[15px] bg-[#987ec8] text-[12px] text-white">
                  Reject
                </button>
                <button className="flex items-center justify-center w-[69px] size-[26px] shadow-xl rounded-[15px] bg-[#67d2d4] text-[12px] text-white">
                  Approve
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full mt-5" />
        </div>
      </div>
    </div>
  );
};

export default User;

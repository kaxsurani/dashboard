import Facebook from "../Assets/facebook.png";
import Twitter from "../Assets/twitter.png";
import Google from "../Assets/google.png";

const TargetBox = () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex mt-4 gap-10">
        <div className="w-[31%] bg-[#fbfbf9] h-[214px] rounded-sm shadow-xl transition-shadow border mb-5">
          <div className="flex items-center justify-between">
            <img className="size-9 ml-7 mt-6" src={Facebook} alt="" />
            <div className="flex flex-col mr-4 mt-6">
              <h3 className=" text-[#111] font-normal text-[28px] flex justify-end">
                12,281
              </h3>
              <div className="flex">
                <h5 className="text-[#1de9b6]">
                  +7.2%{" "}
                  <span className="text-muted text-[#6c757d] text-[18px] font-normal">
                    Total Likes
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="flex">
            <div className="w-[50%] ml-7 flex flex-col gap-2 mt-4 justify-end">
              <div className="flex justify-center">
                <h6 className="flex gap-1 text-center text-[#111] font-normal text-[16px]">
                  <span className="text-muted text-[#6c757d]">Target:</span>
                  34,185
                </h6>
              </div>
              <div className="line w-[60%] h-[6px]"></div>
            </div>
            <div className="w-[50%] ml-7 flex flex-col gap-2 mt-4 justify-end">
              <div className="flex justify-center">
                <h6 className="flex gap-1 text-center text-[#111] font-normal text-[16px]">
                  <span className="text-muted text-[#6c757d]">Duration:</span>
                  350
                </h6>
              </div>
              <div className="line1 w-[45%] h-[6px]"></div>
            </div>
          </div>
        </div>
        <div className="w-[31%] bg-[#fbfbf9] h-[214px] rounded-sm shadow-xl transition-shadow border mb-5">
          <div className="flex items-center justify-between">
            <img className="size-9 ml-7 mt-6" src={Twitter} alt="" />
            <div className="flex flex-col mr-4 mt-6">
              <h3 className=" text-[#111] font-normal text-[28px] flex justify-end">
                11,200
              </h3>
              <div className="flex">
                <h5 className="text-[#a389d4]">
                  +6.2%{" "}
                  <span className="text-muted text-[#6c757d] text-[18px] font-normal">
                    Total Likes
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="flex">
            <div className="w-[50%] ml-7 flex flex-col gap-2 mt-4 justify-end">
              <div className="flex justify-center">
                <h6 className="flex gap-1 text-center text-[#111] font-normal text-[16px]">
                  <span className="text-muted text-[#6c757d]">Target:</span>
                  35,098
                </h6>
              </div>
              <div className="line w-[40%] h-[6px]"></div>
            </div>
            <div className="w-[50%] ml-7 flex flex-col gap-2 mt-4 justify-end">
              <div className="flex justify-center">
                <h6 className="flex gap-1 text-center text-[#111] font-normal text-[16px]">
                  <span className="text-muted text-[#6c757d]">Duration:</span>
                  800
                </h6>
              </div>
              <div className="line1 w-[70%] h-[6px]"></div>
            </div>
          </div>
        </div>
        <div className="w-[31%] bg-[#fbfbf9] h-[214px] rounded-sm shadow-xl transition-shadow border mb-5">
          <div className="flex items-center justify-between">
            <img className="size-9 ml-7 mt-6" src={Google} alt="" />
            <div className="flex flex-col mr-4 mt-6">
              <h3 className=" text-[#111] font-normal text-[28px] flex justify-end">
                10,500
              </h3>
              <div className="flex">
                <h5 className="text-[#04a9f5]">
                  +5.9%{" "}
                  <span className="text-muted text-[#6c757d] text-[18px] font-normal">
                    Total Likes
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="flex">
            <div className="w-[50%] ml-7 flex flex-col gap-2 mt-4 justify-between">
              <div className="flex justify-center">
                <h6 className="flex gap-1 text-center text-[#111] font-normal text-[16px]">
                  <span className="text-muted text-[#6c757d]">Target:</span>
                  25,998
                </h6>
              </div>
              <div className="line w-[60%] h-[6px]"></div>
            </div>
            <div className="w-[50%] ml-7 flex flex-col gap-2 mt-4">
              <div className="flex justify-center">
                <h6 className="flex gap-1 text-center text-[#111] font-normal text-[16px]">
                  <span className="text-muted text-[#6c757d]">Duration:</span>
                  900
                </h6>
              </div>
              <div className="line1 w-[50%] h-[6px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetBox;

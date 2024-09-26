import Facebook from "../Assets/facebook.png";
import Twitter from "../Assets/twitter.png";
import Google from "../Assets/google.png";

const TargetBox = () => {

  const users = [
    { number1: "12,281", number2: "+7.2%", name1: "Total Likes", name2: "Target:", number3: "34,185", name3: "Duration:", number4: "350", imag: Facebook },
    { number1: "11,200", number2: "+6.2%", name1: "Total Likes", name2: "Target:", number3: "35,098", name3: "Duration:", number4: "800", imag: Twitter },
    { number1: "10,500", number2: "+5.9%", name1: "Total Likes", name2: "Target:", number3: "25,998", name3: "Duration:", number4: "900", imag: Google }
  ];

  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex flex-col md:flex-row md:gap-8">
      {users.map((user, index) => (
        <div key={index} className="w-full md:w-[33.3%] bg-[#fbfbf9] h-[214px] rounded-sm shadow-xl transition-shadow border mb-5">
          <div className="flex items-center justify-between">
            <img className="size-9 ml-7 mt-6" src={user.imag} alt="" />
            <div className="flex flex-col mr-4 mt-6">
              <h3 className="text-[#111] font-normal text-[28px] flex justify-end">{user.number1}</h3>
              <div className="flex">
                <h5 className="text-[#1de9b6]">
                  {user.number2}{" "}
                  <span className="text-muted text-[#6c757d] text-[18px] font-normal">
                    {user.name1}
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
                  <span className="text-muted text-[#6c757d]">{user.name2}</span>
                  {user.number3}
                </h6>
              </div>
              <div className="line w-[60%] h-[6px]"></div>
            </div>
            <div className="w-[50%] ml-7 flex flex-col gap-2 mt-4 justify-end">
              <div className="flex justify-center">
                <h6 className="flex gap-1 text-center text-[#111] font-normal text-[16px]">
                  <span className="text-muted text-[#6c757d]">{user.name3}</span>
                  {user.number4}
                </h6>
              </div>
              <div className="line1 w-[45%] h-[6px]"></div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default TargetBox;

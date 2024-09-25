import { LuHome } from "react-icons/lu";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import './Box.css';

const Box = () => {

  const users = [
    { name: "Daily Sales", number1: "$249.95", number2: "50%", className:"line" },
    { name: "Monthly Sales", number1: "$2,942.32", number2: "36%", className:"line1" },
    { name: "Yearly Sales", number1: "$8,638.32", number2: "70%",className:"line" },
  ];

  return (
    <div className="mt-14 flex flex-col gap-3">
      <h5 className="text-[20px]">Dashboard</h5>
      <div className="flex gap-3 items-center">
        <LuHome size={16} className="text-[#3f4d67]" />/
        <div className="font-semibold text-[#111]">Dashboard</div>
      </div>
      <div className="flex flex-col md:flex-row mt-4 gap-8">
      {users.map((user, index) => (
        <div key={index} className="w-full md:w-[33.3%] bg-[#fbfbf9] h-[174px] rounded-sm shadow-xl transition-shadow">
          <div className="flex flex-col gap-5 ml-7 mt-7">
            <p>{user.name}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-[26px] font-light">
                <FaArrowUp size={27} className="text-[#1de9b6]" /> {user.number1}
              </div>
              <div className="text-[#888] mr-8">{user.number2}</div>
            </div>
            <div className={`${user.className} w-[50%] h-2`}></div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Box;

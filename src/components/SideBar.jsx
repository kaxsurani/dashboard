import { useState } from "react";
import Arrow from "../Assets/arrowup.jpg";
import data from "./data";
import { CgMenuLeft } from "react-icons/cg";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      <div
        className={`top-0 h-full bg-[#3f4d67] w-[16%] shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isOpen ? "sticky" : "fixed"} h-[100vh] pl-[1%] pt-[20px]`}
      >
        <div className="">
          <div className="flex justify-between text-[#a9b7d0] text-[22px] pr-4 cursor-pointer">
            <div className="flex gap-3 mb-9 cursor-pointer items-center">
              <img className="size-10 rounded-xl" src={Arrow} alt="" />
              <p className="text-[18px] text-[#fff]">Datta Able</p>
            </div>
            <CgMenuLeft
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          {data.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-1 gap-4 cursor-pointer items-center"
            >
              <div className="flex flex-col gap-4">
                <div className="text-[10px] font-bold text-[#e8edf7]">
                  {user.name}
                </div>
                <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
                  {user.icon}
                  <p>{user.name1}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
                {user.icon1}
                <p>{user.name2}</p>
              </div>
              <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
                {user.icon2}
                <p>{user.name3}</p>
              </div>
              <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
                {user.icon3}
                <p>{user.name4}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default SideBar;

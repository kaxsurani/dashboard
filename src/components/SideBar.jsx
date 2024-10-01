// import { useState } from "react";
// import Arrow from "../Assets/arrowup.jpg";
// import data from "./data";
// import { CgMenuLeft } from "react-icons/cg";
// import { IoCloseSharp } from "react-icons/io5";
// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//       <div
//         className={`top-0 h-full bg-[#3f4d67] shadow-lg transition-transform transform absolute w-[67vw] md:w-[16%] ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } ${isOpen && "md:sticky"} h-[100vh] pl-[1%] pt-[20px]`}
//       >
//         <>
//           <div className={`flex justify-between text-[#a9b7d0] text-[22px] pr-4 cursor-pointer`}>
//             <div className="flex gap-3 mb-9 cursor-pointer items-center">
//               <img className="size-10 rounded-xl" src={Arrow} alt="" />
//               <p className="text-[18px] text-[#fff]">Datta Able</p>
//             </div>
//            {!isOpen && <CgMenuLeft
//               onClick={() => {
//                 setIsOpen(true);
//               }}
//             />}
//            {isOpen && <IoCloseSharp  onClick={() => {
//                 setIsOpen(false);
//               }}/>}
//           </div>
//           {data.map((user) => (
//             <div
//               key={user.id}
//               className="grid grid-cols-1 gap-4 cursor-pointer items-center"
//             >
//               <div className="flex flex-col gap-4">
//                 <div className="text-[10px] font-bold text-[#e8edf7]">
//                   {user.name}
//                 </div>
//                 <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
//                   {user.icon}
//                   <p>{user.name1}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
//                 {user.icon1}
//                 <p>{user.name2}</p>
//               </div>
//               <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
//                 {user.icon2}
//                 <p>{user.name3}</p>
//               </div>
//               <div className="flex items-center gap-3 text-[#a9b7d0] hover:text-[#1dc4e9] pl-[2px]">
//                 {user.icon3}
//                 <p>{user.name4}</p>
//               </div>
//             </div>
//           ))}
//         </>
//       </div>
//   );
// };

// export default SideBar;
import React, { useState } from "react";
import Arrow from "../Assets/arrowup.jpg";
import data from "./data";
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "absolute" : ""
      } top-0 h-full bg-[#3f4d67] shadow-lg transition-width duration-300 ${
        isOpen && "md:sticky"
      } ${isOpen ? "w-64" : "w-13"}
      ${!isOpen && "sticky"}`}
    >
      <>
        <div
          className={`flex justify-between text-[#a9b7d0] text-[22px] pr-4 cursor-pointer`}
        >
          <div className="flex gap-3 mb-9 cursor-pointer items-center ml-4 mt-6">
            {isOpen ? (
              <img className="size-10 rounded-xl" src={Arrow} alt="" />
            ) : !(
              <img className="size-10 rounded-xl" src={Arrow} alt="" />
            )}
            <p className="text-[18px] text-[#fff]">
              {isOpen ? "Datta Able" : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex items-center justify-center p-2 text-[#a9b7d0]"
          >
            {isOpen ? <IoCloseSharp size={24} /> : <CgMenuLeft size={24} />}
          </button>
        </div>
        <nav>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex items-center p-2 text-[#a9b7d0]">
                {isOpen && (
                  <span className="ml-2 text-[#e8edf7] text-[10px] font-semibold">
                    {item.name}
                  </span>
                )}
              </div>
              {item.subNav && (
                <div className={`${isOpen ? "pl-4" : "0px"}`}>
                  {item.subNav.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`flex items-center text-[#a9b7d0] text-[14px] ${
                        isOpen ? "" : "justify-center"
                      } pb-5 p-2 text-white hover:text-[#1dc4e9]`}
                    >
                      {subItem.icon}
                      {isOpen && (
                        <span className="ml-2 text-[#a9b7d0] hover:text-[#1dc4e9]">
                          {subItem.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </>
    </div>
  );
};

export default Sidebar;

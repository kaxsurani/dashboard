import Arrow from "../Assets/arrowup.jpg";
import data from "./data";
const SideBar = () => {
  return (
    <div className="sidebar bg-[#3f4d67] w-[14%] h-[100vh] fixed pl-[1%] pt-[20px]">
      <div className="shortcut-links">
        <div className="side-link flex gap-3 mb-9 cursor-pointer items-center">
          <img className="size-10 rounded-xl" src={Arrow} alt="" />
          <p className="text-[18px] text-[#fff]">Datta Able</p>
        </div>
        {data.map((user) => (
          <div key={user.id} className="side-link grid grid-cols-1 gap-4 cursor-pointer items-center">
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

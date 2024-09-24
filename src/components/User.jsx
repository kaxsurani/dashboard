import User1 from "../Assets/user1.png";
import User2 from "../Assets/user2.png";
import User3 from "../Assets/user3.png";
import User4 from "../Assets/user4.png";
import User5 from "../Assets/user5.png";
import { FaCircle } from "react-icons/fa";

const RecentUsers = () => {
  const users = [
    { name: "Isabella Christensen", img: User1, status: "1de9b6", date: "11 MAY 12:56" },
    { name: "Mathilde Andersen", img: User2, status: "f44236", date: "11 MAY 10:35" },
    { name: "Karla Sorensen", img: User3, status: "1de9b6", date: "9 MAY 17:38" },
    { name: "Ida Jorgensen", img: User4, status: "f44236", date: "19 MAY 12:56" },
    { name: "Albert Andersen", img: User5, status: "1de9b6", date: "21 JULY 12:56" },
  ];

  return (
    <div className="mt-8">
      <div className=" w-full max-w-[100%] h-full bg-[#fbfbf9] rounded-sm shadow-xl transition-shadow border">
        <div className="ml-7 mt-6 text-[17px] font-normal">Recent Users</div>
        <hr className="w-full mt-5" />
        
        <div className="flex flex-col">
          {users.map((user, index) => (
            <div key={index} className="flex gap-4 flex-col md:flex-row items-start p-4 border-b last:border-b-0">
              <img className="w-[50px] h-[50px] rounded-full" src={user.img} alt={user.name} />
              <div className="flex flex-col flex-grow">
                <div className="text-[14px] font-medium">{user.name}</div>
                <div className="text-[14px] text-[#888]">Lorem Ipsum is simply dummy text of…</div>
              </div>
              <div className="flex items-center">
                <FaCircle className={`text-[10px] text-[#${user.status}]`} />
                <div className="text-[#6c757d] text-[14px] font-normal ml-2">{user.date}</div>
              </div>
              <div className="flex items-center space-x-2 mt-2 md:mt-0 md:flex-col md:gap-3 md:mr-5">
                <button className="w-[57px] h-[26px] shadow-xl rounded-[15px] bg-[#987ec8] text-[12px] text-white">
                  Reject
                </button>
                <button className="w-[69px] h-[26px] shadow-xl rounded-[15px] bg-[#67d2d4] text-[12px] text-white">
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentUsers;

import { GoScreenFull } from "react-icons/go";
import Dropdown from "./dropdown";
import { IoIosSearch } from "react-icons/io";
import { BiBell } from "react-icons/bi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
    const options = ['Action', 'Another Action', 'Something else here'];
  return (
    <div className="flex justify-between pt-7 pl-[15.5%]">
      <div className="flex gap-7 items-center">
        <GoScreenFull size={18} />
        <div>
          <Dropdown options={options} />
        </div>
        <IoIosSearch size={20}/>
      </div>
      <div className="flex items-center gap-6 pr-10">
      <BiBell size={18}/>
      <MdOutlineLocalPostOffice size={18}/>
      <CiSettings size={20}/>
      </div>
    </div>
  );
};

export default Navbar;

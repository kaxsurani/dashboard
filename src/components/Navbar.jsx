import { GoScreenFull } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { BiBell } from "react-icons/bi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import Dropdown from './Dropdown'; // Assuming Dropdown is imported

const Header = () => {

  const options = ['Action', 'Another Action', 'Something else here'];
  
  return (
    <div className="flex flex-col md:flex-row justify-between pt-7">
      <div className="flex gap-5 items-center mb-4 md:mb-0">
        <GoScreenFull size={18} />
        <Dropdown options={options} />
        <IoIosSearch size={20} />
      </div>
      <div className="flex items-center gap-6 pr-10">
        <BiBell size={18} />
        <MdOutlineLocalPostOffice size={18} />
        <CiSettings size={20} />
      </div>
    </div>
  );
};

export default Header;


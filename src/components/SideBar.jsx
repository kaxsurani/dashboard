import './SideBar.css'
import Arrow from "../../public/arrowup.jpg"
import { LuHome } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="shortcut-links">
            <div className='side-link flex gap-3 mb-9'>
                <img className='size-10 rounded-xl' src={Arrow} alt="arrow" />
                <p className='text-[18px] text-[#fff]'>Datta Able</p>
            </div>
            <div className='side-link grid grid-cols-1 gap-7'>
              <div className="text-[10px] font-bold text-[#e8edf7]">NAVIGATION</div>
              <div className="flex items-center gap-3 text-[#1dc4e9] pl-[2px]">
              <LuHome size={18}/>
              <p>Dashboard</p>
              </div>
            </div>
            <div className='side-link'>
                <p>Automobiles</p>
            </div>
            <div className='side-link'>
                <p>Sports</p>
            </div>
            <div className='side-link'>
                <p>Entertainment</p>
            </div>
            <div className='side-link'>
                <p>Technology</p>
            </div>
            <div className='side-link'>
                <p>Music</p>
            </div>
            <div className='side-link'>
                <p>Blogs</p>
            </div>
            <div className='side-link'>
                <p>News</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default SideBar;
import { LuHome } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { SiGoogleforms } from "react-icons/si";
import { MdOutlineBackupTable } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const data = [
  { 
    name: "NAVIGATION",
    subNav: [
      {icon: <LuHome size={18} />,
    name: "Dashboard", 
    path: "/dashboard" },
    ],
  },
  {
    name: "UI ELEMENT",
    subNav: [
      {  name: "NAVIGATION",
        icon: <FiBox size={18} />,
        name: "Component", 
        path: "" },
    ],
  },
  {
    name: "Forms & Tables",
    subNav: [
      { name: "Form Elements", icon: <SiGoogleforms size={18} />, path: "" },
      { name: "Table", icon:<MdOutlineBackupTable size={18} />, path: "" },
    ],
  },
  {
    name: "Chart & Maps",
    subNav: [
      { name: "Charts", icon: <FaChartPie size={18} />, path: "" },
      { name: "Map", icon: <FaRegMap size={18} />, path: "" },
    ],
  },
  {
    name: "Pages",
    subNav: [
      { name: "Authentication", icon: <IoLockClosedOutline size={18} />, path: "" },
      { name: "Sample Page", icon: <MdOutlineFindInPage size={18} />, path: "" },
      { name: "Documentation", icon: <FaRegQuestionCircle size={18} />, path: "" },
      { name: "Menu Levels", icon: <MdMenu size={18} />, path: "" },
    ],
  },
];

// const data = [
    // { id: 1, name: "NAVIGATION", icon: <LuHome size={18} />, name1: "Dashboard" },
    // { id: 2, name: "UI ELEMENT", icon: <FiBox size={18} />, name1: "Component" },
    // {
    //   id: 3,
    //   name: "Forms & Tables",
    //   icon: <SiGoogleforms size={18} />,
    //   name1: "Form Elements",
    //   icon1: <MdOutlineBackupTable size={18} />,
    //   name2: "Table",
    // },
    // {
    //   id: 4,
    //   name: "Chart & Maps",
    //   icon: <FaChartPie size={18} />,
    //   name1: "Charts",
    //   icon1: <FaRegMap size={18} />,
    //   name2: "Map",
    // },
    // {
    //   id: 5,
    //   name: "Pages",
    //   icon: <IoLockClosedOutline size={18} />,
    //   name1: "Authentication",
    //   icon1: <MdOutlineFindInPage size={18} />,
    //   name2: "Sample Page",
    //   icon2: <FaRegQuestionCircle size={18} />,
    //   name3: "Documentation",
    //   icon3: <MdMenu size={18} />,
    //   name4: "Menu Levels"
    // },
  // ];
  export default data;
import Box from "./components/Box";
import Navbar from "./components/Navbar";
import RatingBox from "./components/RatingBox";
import SideBar from "./components/SideBar";
import SideBox from "./components/SideBox";
import TargetBox from "./components/TargetBox";
import User from "./components/user";
import UserGrow from "./components/UserGrow";

const App = () => {
  return (
    <div>
      <SideBar />
      <Navbar />
      <Box />
      <div className="flex">
        <User />
        <SideBox />
      </div>
      <TargetBox />
      <div className="flex items-center justify-between">
      <RatingBox />
      <UserGrow/>
      </div>
    </div>
  );
};

export default App;

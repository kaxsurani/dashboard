import React from "react";
import RatingBox from "./RatingBox";
import SideBar from "./SideBar";
import SideBox from "./SideBox";
import TargetBox from "./TargetBox";
import User from "./user";
import UserGrow from "./UserGrow";
import Box from "./Box";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex h-full w-full">
      <SideBar />
      <div className="w-full px-5">
        <Navbar />

        <Box />
        <div className="flex flex-col md:flex-row md:gap-5">
          <User />
          <SideBox />
        </div>
        <TargetBox />
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-full md:w-1/3">
            <RatingBox />
          </div>
          <div className="w-full md:w-2/3 pl-4">
            <UserGrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

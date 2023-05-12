import React from "react";
import MainDash from "./MainDash/MainDash";
import RightSide from "./RightSide/RightSide";
import Sidebar from "./Sidebar/Sidebar";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="Admin">
      <div className="AdminBack">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};

export default Admin;

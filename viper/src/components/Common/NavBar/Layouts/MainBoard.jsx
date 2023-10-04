import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
export default function MainBoard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

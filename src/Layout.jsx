import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

function Layout() {
  return (
    <>
      <Header />

      <div>
        <Sidebar />
        <div style={{ marginLeft: 256, padding: 10, position: "relative" }}>
          <Outlet />
        </div>

        <div
          style={{
            marginLeft: 256,
            padding: 10,
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            opacity: 0,
            display:'none'
          }}
        >
          <Home />
        </div>

        <div style={{ marginLeft: 256, padding: 10, bottom: 0, height: 50 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;

import Navbar from "@/components/Layout/Navbar";
import React from "react";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {

  return (
    <div className="h-100">
      <Navbar />
      <div className="container" style={{ marginTop: '5em' }}>{children}</div>
    </div>
  );
};

export default Layout;


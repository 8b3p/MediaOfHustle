import Navbar from "@/components/Layout/Navbar";
import React from "react";
import Footer from "@/components/Layout/Footer";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {

  return (
    <div className="flex flex-col" style={{ minHeight: 'calc(100vh - 5rem)' }}>
      <Navbar />
      <div className="container" style={{ marginTop: '5em' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;


import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Layout({ children }) {

  return (
    <div>
        <div className="px-5 md:px-20">
          <Header className="px-5 md:px-20" />
          {children}
          <Footer className="px-5 md:px-20" />
        </div>
    </div>
  );
}

export default Layout;

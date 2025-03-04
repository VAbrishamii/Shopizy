import Header from "./Header";
import Footer from "./Footer";
import { useRef } from "react";
import { Outlet } from "react-router-dom";


const Layout = ({ children }) => {
  const cartIconRef = useRef(null);
  console.log('cartIconRef in Layout:', cartIconRef);
  return (
    <>
    <div className="layout">
      <Header cartIconRef={cartIconRef}/>
     
      <div className="content">
        <main>
        <Outlet context={{cartIconRef}}/>
        {children}
        </main>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Layout;

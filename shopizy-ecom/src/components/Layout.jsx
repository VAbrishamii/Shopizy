import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

const Layout = ({ children }) => {
  const cartIconRef = useRef(null);

  return (
    <div className="layout">
      <Header cartIconRef={cartIconRef} />

      <div className="content">
        <main>
          <Outlet context={{ cartIconRef }} />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

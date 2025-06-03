import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
/**
 * Layout component that wraps the main content of the application.
 * It includes the Header and Footer components, and provides a context for the cart icon reference.
 */
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

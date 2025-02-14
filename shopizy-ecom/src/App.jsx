import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;

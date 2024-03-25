import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/Product-List/components/ProductList";
import Footer from "../features/common/Footer"
function Home() {
  return (
    <div>
      <Navbar/>
        <ProductList />
      <Footer/>
    </div>
  );
}

export default Home;

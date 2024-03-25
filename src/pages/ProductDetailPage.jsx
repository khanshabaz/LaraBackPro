import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/Product-List/components/ProductDetail";
import Footer from "../features/common/Footer";

function ProductDetailPage() {
  return (
    <div>
      <Navbar />
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;

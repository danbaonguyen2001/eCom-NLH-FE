import React, { useEffect, useState } from "react";
import { veData } from "../home/mockData";

import productHandler from "../../features/product/function";

const PSlider = React.lazy(() => import("./PSlider"));

// Load sản phẩm điện thoại có thể tái sử dụng để loàd danh sách sản phẩm liên quan
const SeeMore = () => {
  const [products, setProducts] = useState([]);
  // veData config
  const veSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: true,
  };

  useEffect(() => {
    productHandler.getProductsTop().then((res) => {
      console.log(res);
      const products = res?.data;
      console.log("Get Top products:");
      console.log(products);
      setProducts(products);
    });
  }, []);
  return (
    <div className="see_more">
      <header className="see_more_header">Xem thêm sản phẩm khác</header>
      <PSlider data={products} settings={veSettings} />
    </div>
  );
};

export default SeeMore;

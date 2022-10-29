import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  removeAllProduct,
} from "../features/product/productSlice";
import { useHistory } from "react-router-dom";
import "../sass/_add_compare_product.scss";
import productHandler from "../features/product/function";

const specifications = [
  {
    name: "Màn hình",
    value: "AMOLED",
  },
  {
    name: "Chip",
    value: "Apple A13",
  },
  {
    name: "Ram",
    value: "4G",
  },
  {
    name: "Dung Lượng",
    value: "64GB",
  },
  {
    name: "Chip",
    value: "Apple A13",
  },
  {
    name: "Camera Sau",
    value: "2 camera 12MP",
  },
  {
    name: "Camera trước",
    value: "12 MP",
  },
  {
    name: "Pin",
    value: "3110 mAH",
  },
  {
    name: "Sạc",
    value: "18 W",
  },
];

const product1 = {
  name: "Iphone 11",
  image:
    "https://res.cloudinary.com/ddxtcxrwg/image/upload/v1666687888/eCom-NLH-assets/products/phones/iphone-12/iphone-12-do-1-1-org_bopger.jpg",
  rating: "4.0",
  numberRate: "100",
  marketPrice: "11790000",
  price: "14990000",
  discount: "21",
  specifications1: specifications,
};

const product2 = {
  name: "Iphone 12",
  image:
    "https://res.cloudinary.com/ddxtcxrwg/image/upload/v1665117883/eCom-NLH-assets/products/phones/iphone-11/iphone-11_x1lrfo.jpg",
  rating: "4.0",
  numberRate: "100",
  marketPrice: "11790000",
  price: "14990000",
  discount: "21",
  specifications2: specifications,
};

const AddCompareProduct = () => {
  const [displaySmall, setDisPlaySmall] = useState(true);
  const [displayLarge, setDisPlayLarge] = useState(false);
  const [products, setProducts] = useState([]);

  const handleClickSmall = () => {
    setDisPlaySmall(false);
    setDisPlayLarge(true);
  };
  const handleClickLarge = () => {
    setDisPlayLarge(false);
    setDisPlaySmall(true);
  };

  const history = useHistory();
  const handleClickCompare = () => {
    history.push("/sosanh");
    setDisPlayLarge(false);
    setDisPlaySmall(true);
  };
  const handleDeleteProduct = () => {};

  //handle
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);
  console.log(productList);
  useEffect(() => {
    for (let i = 0; i < productList.length; i++) {
      const fetchProduct = async () => {
        const res = await productHandler.getProductById(productList[i]);
        console.log(res);
        try {
          setProducts(products.push(res.data));
        } catch (e) {
          console.log(e);
        }
      };
      fetchProduct();
    }
  }, [products]);
  console.log(products);
  return (
    <div className="acp row">
      {/* Small */}
      {displaySmall && (
        <div className="acp-small l-1" onClick={handleClickSmall}>
          <center>
            <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
            <button className="acp-small__btn">So sánh (0)</button>
          </center>
        </div>
      )}

      {/* Large UI */}
      {displayLarge && (
        <div className="acp-large l-8">
          <div className="row">
            <div className="acp-large__product1 col l-4">
              <center>
                <img
                  src={product1.image}
                  alt={product1.name}
                  className="acp-large__product1--img l-3"
                />
                <br />
                <h4>{product1.name}</h4>
              </center>

              <i class="fa-solid fa-xmark" onClick={handleDeleteProduct}></i>
            </div>
            <div className="acp-large__product2 col l-4">
              <center>
                <img
                  src={product2.image}
                  alt={product2.name}
                  className="acp-large__product2--img l-3"
                />
                <br />
                <h4>{product2.name}</h4>
              </center>

              <i class="fa-solid fa-xmark" onClick={handleDeleteProduct}></i>
            </div>
            <div className="acp-large__btn col l-4">
              <button className="btn" onClick={handleClickCompare}>
                So sánh
              </button>
              &nbsp;
              <button className="btn">Xóa tất cả sản phẩm</button>
            </div>
          </div>
          <div className="acp-large__btnclose">
            <button onClick={handleClickLarge}>
              Thu gọn &nbsp;
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCompareProduct;

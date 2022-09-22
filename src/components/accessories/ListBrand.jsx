import React, { useState } from "react";
import "../../sass/accessories/accessories.scss";

import { listBrand } from "./data";

const ListBrand = () => {
  const [invisible, setInvisible] = useState(true);

  const [viewMore, setViewMore] = useState(9);

  const handleShowViewMore = () => {
    setInvisible(false);
    setViewMore((prev) => prev + (listBrand.length - 9));
  };

  return (
    <section className="brand">
      <h2>THƯƠNG HIỆU HÀNG ĐẦU</h2>
      <div className="listBrand">
        {listBrand.slice(0, viewMore).map((brand) => (
          <a key={brand.id} href="">
            <img src={brand.url} />
          </a>
        ))}

        {invisible && (
          <button className="btnViewMore" onClick={handleShowViewMore}>
            Xem thêm
          </button>
        )}
      </div>
    </section>
  );
};

export default ListBrand;

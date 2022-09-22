import React, { useState, useEffect, useRef} from "react";

import { menuTopFixed } from "./data";

const MenuTopFixed = () => {
  const [highlight, setHighlight] = useState("");
  const [show, setShow] = useState(false);
  const ref = useRef()

  useEffect(() => {

   

    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 500) {
        setShow(true);
      } else {
        setShow(false);
      }

      if (window.scrollY < 800) {
        setHighlight("");
      } else if (window.scrollY < 1400 && window.scrollY >= 800) {
        setHighlight(menuTopFixed[0].title);
      } else if (window.scrollY <= 2600 && window.scrollY >= 1400) {
        setHighlight(menuTopFixed[1].title);
      } else if (window.scrollY > 2600 && window.scrollY < 3500) {
        setHighlight(menuTopFixed[2].title);
      } else if (window.scrollY >= 3500 && window.scrollY < 4300) {
        setHighlight(menuTopFixed[3].title);
      } else if (window.scrollY >= 4300 && window.scrollY < 5690) {
        setHighlight(menuTopFixed[4].title);
      } else if (window.scrollY >= 5690 && window.scrollY < 6500) {
        setHighlight(menuTopFixed[5].title);
      } else if (window.scrollY >= 6500 && window.scrollY < 7350) {
        setHighlight(menuTopFixed[6].title);
      } else if (window.scrollY >= 7350) {
        setHighlight(menuTopFixed[7].title);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    

      console.log(ref.current)
      
  }

  return (
    <div>
      {show && (
        <div className="menu-top-fixed">
          <div className="accessories-container">
            {menuTopFixed.map((cate, index) => (
              <div className="wrapper" key={index}
             
              >
                <a href="javascript:;"
                 id={`${cate.name}`}
                onClick={handleClick}>
                  <img src={cate.url} alt={cate.title} className={cate.name} />
                  <p
                    className="content"
                    style={
                      highlight === cate.title
                        ? {
                            color: "#f2c94c",
                            fontWeight: "bold",
                          }
                        : {}
                    }
                  >
                    {cate.title}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuTopFixed;

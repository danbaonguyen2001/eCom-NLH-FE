import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../sass/phone/banner.scss";

//import "../../assets/css/layout.css"

const sliders = [
  {
    id: 1,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/08/banner/800-200-800x200-48.png",
  },
  {
    id: 2,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/08/banner/800-200-800x200-52.png",
  },
  {
    id: 3,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/08/banner/800-200-800x200-55.png",
  },
  {
    id: 4,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-135.png",
  },

  {
    id: 5,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/07/banner/he-poco-800-200-800x200.png",
  },

  {
    id: 6,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/08/banner/800-200--1--800x200-2.png",
  },

  {
    id: 7,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/08/banner/800-200--1--800x200-4.png",
  },

  {
    id: 8,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-143.png",
  },

  {
    id: 9,
    title: "Lorem",
    url: "https://cdn.tgdd.vn/2022/08/banner/he-s22-800-200-800x200.png",
  },
];

const banners = [
  {
    id: 1,
    title: "lorem",
    url: "https://cdn.tgdd.vn/2022/07/banner/390-97-390x97-3.png",
  },
  {
    id: 2,
    title: "lorem",
    url: "https://cdn.tgdd.vn/2022/08/banner/v2Oppo-A54-390x97-1.png",
  },
];

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nav: true,
    navText: [
      '<span><i class="fas fa-chevron-left"></i></span>',
      '<span><i class="fas fa-chevron-right"></i></span>',
    ],
  };

  return (
    <div className="containerPC">
      <div className="slider-banner">
        <div className="slider">
          <Slider {...settings}>
            {sliders.map((slide) => (
              <div key={slide.id}>
                <img src={slide.url} alt="Slider" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="banner">
          {banners.map((banner) => (
            <div key={banner.id}>
              <img src={banner.url} alt={banner.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSlider;

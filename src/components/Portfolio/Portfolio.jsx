import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import c from "../../img/c.PNG";
import restorent from "../../img/restorent.PNG";

import HOC from "../../img/hoc.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide >
          <a href='https://car-sandy.vercel.app/'>  <img style={{ "height": "10.7rem" }} src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://petite-vase.surge.sh'>  <img style={{ "height": "10.7rem" }} className="siderbr my-5 img1" src={c} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://mern-418ex8thb-ehteshambutt.vercel.app/'>  <img style={{ "height": "10.7rem" }} className=" img2 marr" src={restorent} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://petite-vase.surge.sh'>  <img style={{ "height": "10.7rem" }} className="siderbr img3 marr mx-5" src={HOC} alt="" /></a>
          {/* <img  alt="" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

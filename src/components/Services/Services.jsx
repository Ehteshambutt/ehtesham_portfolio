import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Projects</span>
        <spane>
         Here are links of my few React js websites projects 
          <br />
<p className="mx-5">Click these <i class="fa-sharp fa-solid fa-3"></i> Boxes<i class="fa-sharp fa-solid fa-right-long ma"></i></p>
        </spane>
        <a href='https://wa.me/+923105321069' >
          <button className="button s-button">Whatsapp</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
  <a
      className="nav-link text-light"
      href="https://petite-vase.surge.sh"
    >  <Card
    emoji={HeartEmoji}

    
    heading={"Design"}
    detail={"Web design, html css design,Bootstrap 5,javascript"}
  /></a>
      
         
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
            <a
      className="nav-link text-light"
      href="https://car-sandy.vercel.app/"
    >  <Card
    emoji={Glasses}
    heading={"Developer"}
    detail={"Html, Css, JavaScript, React, Nodejs, Express"}
  /></a>
          
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
            <a
      className="nav-link text-light"
      href="https://mern-418ex8thb-ehteshambutt.vercel.app/"
    >    <Card
    emoji={Humble}
    heading={"Figma to"}
    detail={
      "I can make your figma design into react js website"
    }
    color="rgba(252, 166, 31, 0.45)"
  /></a>
          {/* <Card
            emoji={Humble}
            heading={"Figma to"}
            detail={
              "I can make your figma design into react js website"
            }
            color="rgba(252, 166, 31, 0.45)"
          /> */}
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

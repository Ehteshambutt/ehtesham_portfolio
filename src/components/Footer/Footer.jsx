import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ehteshambutt58@gmail.com</span>
        <a href="https://www.facebook.com/ehtesham.but.35"><div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <a href="https://www.instagram.com/ehteshambutt58/"> <Facebook color="white" size={"3rem"} /></a>
        <a href="https://github.com/Ehteshambutt"> <Gitub color="white" size={"3rem"} /> </a>
        </div></a> 
      </div>
    </div>
  );
};

export default Footer;

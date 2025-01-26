import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div className="copyright">&copy; All Rights Reserved</div>
      <div>
        
          <FaFacebookF />
       
       
          <FaYoutube />
        
        
          <FaLinkedin />
        
          <FaWhatsapp/>
          <RiInstagramFill />

      </div>
    </footer>
  );
};

export default Footer;
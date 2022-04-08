import React from "react";
import twitterIcon from "../images/Twitter-Icon.png";
import facebookIcon from "../images/Facebook-Icon.png";
import instagramIcon from "../images/Instagram-Icon.png";
import githubIcon from "../images/GitHub-Icon.png";

function Footer() {
  return (
    <div className="footer-container">
      <img src={twitterIcon} alt="" />
      <img src={facebookIcon} alt="" />
      <img src={instagramIcon} alt="" />
      <img src={githubIcon} alt="" />
    </div>
  );
}

export default Footer;

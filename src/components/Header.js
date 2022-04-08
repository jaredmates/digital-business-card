import React from "react";
import ken from "../images/ken.jpg";

function Header() {
  return (
    <div className="header-container">
      <img src={ken} alt="" className="profile-pic" />

      <div className="content-container">
        <h1>Laura Smith</h1>
        <h3>Frontend Developer</h3>
        <a href="">laurasmith.website</a>
      </div>

      <div className="button-container">
        <button>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Email
        </button>
        <button>
          <i class="fa fa-linkedin-square"></i>
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import me from "../images/Me.jpg";

function Header() {
  return (
    <div className="header-container">
      <img src={me} alt="" className="profile-pic" />

      <div className="content-container">
        <h1>Jared Mates</h1>
        <h3>Frontend Developer</h3>
        <a href="">jaredmates.website</a>
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

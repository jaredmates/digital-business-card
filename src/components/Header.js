import React from "react";
import ken from "../images/ken.jpg";

function Header() {
  return (
    <div>
      <img src={ken} alt="" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <a href="">laurasmith.website</a>
      <button>Email</button>
      <button>LinkedIn</button>
    </div>
  );
}

export default Header;

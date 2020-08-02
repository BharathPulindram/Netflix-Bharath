import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://i1.wp.com/www.healththoroughfare.com/wp-content/uploads/2019/01/netflix-fitness-videos.png?fit=950%2C534&ssl=1"
        alt="Netflix-log"
      />
      <img
        className="nav__avatar"
        src="https://linksind.net/bharathanenenu/featured1.jpg"
        alt="Bharath-logo"
      />
    </div>
  );
}

export default Navbar;

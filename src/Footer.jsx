import React from "react";
import "./index.css";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <div className="footer">
          <p>Keep &copy; copyright {year}</p>
        </div>
    );
}
export default Footer;
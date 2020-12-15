import React from "react";
import "./index.css";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <div className="footer">
          <p><span>Developed by :</span> <span className="developer-name">Sunil Kumar</span></p>
        </div>
    );
}
export default Footer;
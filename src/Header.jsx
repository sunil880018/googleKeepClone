import React, { useCallback, useState } from "react";
import logo from "./images/keep_images.png";
import google from "./images/google_logo.png";
import Gmail from "./images/Gmail-logo.png";
import Map from "./images/map_logo.jpg";
import PlayStore from "./images/playstore_logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import SearchIcon from '@material-ui/icons/Search';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import "./index.css";

function Header(props){

  const onMenu = () =>{
    document.querySelector(".open-menu").classList.toggle("open");
  }

  const onSetting = () =>{
    document.querySelector(".setting-option").classList.toggle("Sopen");
  }

  const onView = () =>{
    document.querySelector(".View-option").classList.toggle("Vopen");
  }
  const onload = () =>{
    window.location.reload();
  }
  
    return (
        <div className="header">
          <div className="menu-option">
          <button className="sidebar" onClick ={onMenu}><MenuIcon/></button>
          <img src={logo} alt="keep_images" width="40" height="40" className="klogo"/>
          <a href="#" className="keep">Keep</a>
          <div className="open-menu">
             <div>
             <EmojiObjectsOutlinedIcon/>
             <a href="#">Notes</a>
             </div>
             <div>
             <DeleteForeverOutlinedIcon/>
             <a href="#">Trash</a>
             </div>
             <div>
             <AddAlertOutlinedIcon/>
             <a href="#">Reminder</a>
             </div>

          </div>
          </div>
          <div className="search-input">
             <p className="search-p"><SearchIcon/></p>
             <input type="text" placeholder="Search"/>
          </div>
          <div className="setting"> 
             <button onClick = {onload}><RefreshIcon/></button>
             <button  onClick ={onSetting}><SettingsIcon/></button>
             <button onClick ={onView}><ViewComfyIcon/></button>
             <div className="setting-option">
                 <div><a href="#">Settings</a></div>
                 <div><a href="#">Enable dark theme</a></div>
                 <div><a href="#">Send feedback</a></div>
                 <div><a href="#">Help</a></div>
                 <div><a href="#">App download</a></div>
                 <div><a href="#">keyboard shortcuts</a></div>
             </div>
             <div className="View-option">
                 <div>
                      <a href="https://www.google.com/">
                        <img src ={google} width="30px" height="30px" />
                      </a>
                      <a href="https://www.google.com/">Google</a>
                 </div>
                 <div>
                      <a href="https://www.google.com/maps">
                        <img src ={Map} width="50px" height="30px" />
                      </a>
                      <a href="https://www.google.com/maps">Map</a>
                 </div>
                 <div>
                      <a href="https://mail.google.com/">
                        <img src ={Gmail} width="30px" height="30px" />
                      </a>
                      <a href="https://mail.google.com/">Gmail</a>
                 </div>
                 <div>
                      <a href="https://play.google.com/store/apps/details?id=fr.ogyst.yle">
                        <img src ={PlayStore} width="30px" height="30px" />
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=fr.ogyst.yle">PlayStore</a>
                 </div>
             </div>
          </div>
        </div>
    );
}
export default Header;
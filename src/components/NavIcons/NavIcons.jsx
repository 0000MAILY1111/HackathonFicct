import React from "react";

import swim from "../../assets/Swin.svg";
import gym from "../../assets/GYM.svg";
import health from "../../assets/Health.svg";
import tourism from "../../assets/tourism.svg";
import education from "../../assets/education.svg";
import bici from "../../assets/Bici.svg";
import "./NavIcons.css"  

const NavIcons = () => {
  return (
    <div className="icon-container">
      <img src={swim} alt="icono" className="icon" onClick={() => handleClick ('swim')} />
      <img src={gym} alt="icono" className="icon" onClick={() => handleClick ('gym')} />
      <img src={health} alt="icono" className="icon" onClick={() => handleClick ('healt')} />
      <img src={tourism} alt="icono" className="icon" onClick={() => handleClick ('tourism')} />
      <img src={education} alt="icono" className="icon"  onClick={() => handleClick ('education')}/>
      <img src={bici} alt="icono" className="icon"  onClick={() => handleClick ('bici')}/>

        
    </div>
  );
};

export default NavIcons;

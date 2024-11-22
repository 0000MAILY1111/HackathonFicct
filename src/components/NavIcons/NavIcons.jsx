import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tourism from "../../assets/tourism.svg";
import tourism_unselected from "../../assets/toursim_unselected.svg";
import education from "../../assets/education.svg";
import edcucor from "../../assets/edcucor.svg";
import bici from "../../assets/Bici.svg";
import bicicor from "../../assets/bicicor.svg";
import swim from "../../assets/Swin.svg";
import Swingna from "../../assets/Swingna.svg";
import gym from "../../assets/GYM.svg";
import GYMCOr from "../../assets/GYMCOr.svg";
import health from "../../assets/Health.svg";
import Healtcor from "../../assets/Healtcor.svg";

const NavIcons = () => {
  const [selectedButton, setSelectedButton] = useState(""); // Estado para rastrear el botón seleccionado
  const navigate = useNavigate();

  const handleClick = (x) => {
    setSelectedButton(x); // Actualizamos el estado con el botón seleccionado
    navigate(`/${x}`);
  };

  return (
    <div className="icon-container" style={{ display: "flex", gap: "10px" }}>
      <img
        src={selectedButton === "tourism" ? tourism : tourism_unselected}
        alt="icono"
        onClick={() => handleClick("tourism")}
        style={{ width: "50px", cursor: "pointer" }}
      />
      <img
        src={selectedButton === "education" ? edcucor : education}
        alt="icono"
        onClick={() => handleClick("education")}
        style={{ width: "50px", cursor: "pointer" }}
      />
      <img
        src={selectedButton === "publicservice" ? bicicor : bici}
        alt="icono"
        onClick={() => handleClick("publicservice")}
        style={{ width: "50px", cursor: "pointer" }}
      />
      <img
        src={selectedButton === "swim" ? Swingna : swim}
        alt="icono"
        onClick={() => handleClick("swim")}
        style={{ width: "50px", cursor: "pointer" }}
      />
      <img
        src={selectedButton === "gym" ? GYMCOr : gym}
        alt="icono"
        onClick={() => handleClick("gym")}
        style={{ width: "50px", cursor: "pointer" }}
      />
      <img
        src={selectedButton === "healt_public" ? health : Healtcor}
        alt="icono"
        onClick={() => handleClick("healt_public")}
        style={{ width: "50px", cursor: "pointer" }}
      />
    </div>
  );
};

export default NavIcons;

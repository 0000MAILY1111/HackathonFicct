import tourism from "../../assets/tourism.svg";
import education from "../../assets/education.svg";
import bici from "../../assets/Bici.svg";
import swim from "../../assets/Swin.svg";
import gym from "../../assets/GYM.svg";
import health from "../../assets/Health.svg";
import tourism_unselected from "../../assets/toursim_unselected.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NavIcons.css"  



const NavIcons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (x) => {
    if (x == "swim") navigate("/swim");    
    if (x == "home") navigate("/home");    
    if (x == "infoplace") navigate("/infoplace");    
    if (x == "education") navigate("/education");    
    if (x == "gym") navigate("/gym");    
    if (x == "healt_public") navigate("/healt_public");    
    if (x == "tourism") navigate("/tourism");    
    if (x == "publicservice") navigate("/publicservice");      
  };

  return (
    <div className="icon-container">
      
      {(location.pathname == '/home' || location.pathname == '/tourism') ? (
        <img src={tourism} alt="icono" className="icon" onClick={() => handleClick ('tourism')} />
      ) : (
        <img src={tourism_unselected} alt="icono" className="icon" onClick={() => handleClick ('tourism')} />
      ) }
      
      <img src={education} alt="icono" className="icon"  onClick={() => handleClick ('education')}/>
      <img src={bici} alt="icono" className="icon"  onClick={() => handleClick ('publicservice')}/>
      <img src={swim} alt="icono" className="icon" onClick={() => handleClick ('swim')} />
      <img src={gym} alt="icono" className="icon" onClick={() => handleClick ('gym')} />
      <img src={health} alt="icono" className="icon" onClick={() => handleClick ('healt_public')} />
        
    </div>
  );
};

export default NavIcons;

import React, { useState } from "react";
import "./styles/IntroPage.css";
import { Link } from "react-router-dom";

import backgroundImage from "../assets/introScreen.jfif";
import spain from "../assets/Español.svg";
import usa from "../assets/English.svg";
import german from "../assets/Deutsh.svg";
import brasil from "../assets/Brazil.svg";
import france from "../assets/Francais.svg";

const translations = {
  es: {
    welcome: "Prepárate para",
    adventures: "Nuevas Aventuras",
    description:
      "Si te gusta explorar y aprender entonces este es tu lugar. Acá podrás descubrir la belleza de Santa Cruz.",
    explore: "Explorar",
  },
  en: {
    welcome: "Get ready for",
    adventures: "New Adventures",
    description:
      "If you like exploring and learning, this is your place. Here you can discover the beauty of Santa Cruz.",
    explore: "Explore",
  },
  de: {
    welcome: "Bereiten Sie sich auf",
    adventures: "Neue Abenteuer",
    description:
      "Wenn Sie gerne erkunden und lernen, ist dies Ihr Ort. Hier können Sie die Schönheit von Santa Cruz entdecken.",
    explore: "Erkunden",
  },
  br: {
    welcome: "Prepare-se para",
    adventures: "Novas Aventuras",
    description:
      "Se você gosta de explorar e aprender, este é o seu lugar. Aqui você pode descobrir a beleza de Santa Cruz.",
    explore: "Explorar",
  },
  fr: {
    welcome: "Préparez-vous pour",
    adventures: "Nouvelles aventures",
    description:
      "Si vous aimez explorer et apprendre, c'est votre endroit. Ici, vous pouvez découvrir la beauté de Santa Cruz.",
    explore: "Explorer",
  },
};

const IntroPage = () => {
  const [selectedLang, setSelectedLang] = useState("es"); // Idioma por defecto
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸", img: spain },
    { code: "de", name: "Deutsch", flag: "🇩🇪", img: german },
    { code: "en", name: "English", flag: "🇺🇸", img: usa },
    { code: "br", name: "Brazil", flag: "🇧🇷", img: brasil },
    { code: "fr", name: "Français", flag: "🇫🇷", img: france },
  ];

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleLanguageSelect = (langCode) => {
    setSelectedLang(langCode);
    setIsLanguageOpen(false);
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="background-overlay">
        <div className="intro-content">
          <div className="intro-header">
            <img
              src={languages.find((lang) => lang.code === selectedLang).img}
              alt={selectedLang}
              className="selected-flag"
            />
            <button
              className="language-button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              {languages.find((lang) => lang.code === selectedLang).flag}
            </button>

            {isLanguageOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="language-option"
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="main-content">
            <h1>{translations[selectedLang].welcome}</h1>
            <h2>{translations[selectedLang].adventures}</h2>
            <p>{translations[selectedLang].description}</p>
            <div className="dots-container">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
            <Link to="/home">
              <button className="explore-button">
                {translations[selectedLang].explore}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;

import "./styles/HomePage.css";

import search from "../assets/search.png";
import filter from "../assets/filter.svg";
import logoSantaCruz from "../assets/Logo SCZ GAD - Original - 2021_1 (2).png"; // Ruta de la imagen
import NavIcons from "../components/NavIcons/NavIcons";
import { FiltrarMenu } from "../components/FiltrarMenu";

export const GYMpages = () => {
    return (
        <div className="home-container">
            <div className="green-corner">
                <img src={logoSantaCruz} alt="Logo Santa Cruz" className="corner-image" />
            </div>

            <div className="content">
                <h1 className="title">Descubre</h1>
                <p className="subtitle">Santa Cruz de la Sierra</p>

                <NavIcons />

                <div className="search-options">
                    <p className="map-link">Explorar en el mapa</p>
                    <div className="filter-option">
                    <FiltrarMenu/>
                        <img src={filter} alt="Filter icon" className="filter-icon" />

                    </div>
                </div>

                <div className="search-results">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="result-card" onClick={() => alert(num)} >
                            <img src={search} alt={`Place ${num}`} className="place-image" />
                            <div className="card-content">
                                <h4 className="place-name">Ife Grand Resort</h4>
                                <p className="place-distance">A 5 Km</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

import { useState } from "react";
import './FiltrarMenu.css';

export function FiltrarMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {open ? (
                <div className="popUp">
                    <div className="popUp-content">
                        {/* Título */}
                        <h2 className="popUp-title">Filtrar</h2>
                        
                        {/* Checkboxes */}
                        <div className="popUp-checkboxes">
                            <label>
                                <input type="checkbox" /> Más cercano
                            </label>
                            <label>
                                <input type="checkbox" /> Más popular
                            </label>
                        </div>
                        
                        {/* Barras de rango */}
                        <div className="popUp-range">
                            <div>
                                <label>Rango de distancia: 0 km - 10 km</label>
                                <input type="range" min="0" max="10" step="1" />
                            </div>
                            <div>
                                <label>Rango de tiempo: 0 hr - 10 hr</label>
                                <input type="range" min="0" max="10" step="1" />
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="popUp-buttons-container">
                            <button className="button-aplicar">Aplicar</button>
                            <button className="button-cancelar" onClick={() => setOpen(false)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p onClick={() => setOpen(!open)}>Filtrar</p>
            )}
        </>
    );
}

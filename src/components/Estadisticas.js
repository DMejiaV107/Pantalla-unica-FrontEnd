import React from 'react';
import '../styles/estadisticas/styles.css';

function Estadisticas() {
    return(
        <div className="estadisticas">
            <div className="top-bar-options">
                <button type="button" className="top-bar-button" id="darkGreen1">Seguimiento e-commerce</button>
                <button type="button" className="top-bar-button" id="lightGreen1">Renovaciones</button>
                <button type="button" className="top-bar-button" id="darkGreen2">Pagos</button>
                <button type="button" className="top-bar-button" id="lightGreen2">Cobros</button>
            </div>
            <div className="chartsSpace">
                <img className="charts" src="http://www.kennelclubargentino.org.ar/wp-content/uploads/2020/01/corgi3.jpg" alt="charts"/>
                <img className="charts" src="https://images-na.ssl-images-amazon.com/images/I/41Cjm4XaqEL._AC_SL1024_.jpg" alt="charts"/>
            </div>
            <div className="notificaciones">
                <h1>Notificaciones:</h1>
            </div>
        </div>
    )
}

export default Estadisticas;
import React from 'react';
import '../styles/saldo/styles.css'

function Saldo() {
    return (
        <div className="credits">
            <div className="rectangles-top">
                <div className="rectangle green"></div>
                <div className="rectangle grey"></div>
                <div className="rectangle grey"></div>
            </div>
            <div className="opciones">
                <div className="cuenta-origen">
                    <p>Cuenta origen</p>
                    <select className="options">
                        <option value="Make a selection">Make a selection</option>
                        <option value="Cuenta 1">Cuenta 1</option>
                        <option value="Cuenta 2">Cuenta 2</option>
                        <option value="Cuenta 3">Cuenta 3</option>
                    </select>
                </div>
                <div className="tarjeta-credito">
                    <p>Tarjeta de Crédito</p>
                    <select className="options">
                        <option value="Make a selection">Make a selection</option>
                        <option value="Tarjeta 1">Tarjeta 1</option>
                        <option value="Tarjeta 2">Tarjeta 2</option>
                        <option value="Tarjeta 3">Tarjeta 3</option>
                    </select>
                </div>
            </div>
            <div className="bottom">
                <div className="rectangle grey"></div>
            </div>
        </div>
    )
}

export default Saldo;
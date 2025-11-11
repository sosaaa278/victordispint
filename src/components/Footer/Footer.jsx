import { useState } from "react";
import Copyright from "../Copyright/copyright";

function Footer({ setx1, x1 }) {

    let nombre = "AHORA YO SOY EL DUENO";

    return (
        <>
            <footer>
                <h1>COMPONENTE DE REACT CON ESTADO: {x1}</h1>
                <p>El nombre ={nombre}</p>
                <button
                    onClick={() => {
                        setx1("Valor desde Footer")
                        nombre = "CAMBIO DE NOMBRE";
                    }}
                >Actualizar el Estado</button>
                <Copyright />
            </footer>
        </>
    );
}
export default Footer;
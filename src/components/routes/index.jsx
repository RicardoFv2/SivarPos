import React from "react";
import Menu from "../menu.jsx";
import '../css/index.css'

const Index = () => {

    return (
        <div id="wrapper">
            <Menu />
            <div id="content">
                <div class="container" >

                    <div class="box P texto centro">PRODUCTOS</div>
                    <div class="box P texto centro">VENTAS</div>
                    <div class="box P texto centro">CAJA</div>
                    <div class="box P texto centro">RECIBOS</div>
                    <div class="box P texto centro">PANEL DE CONTROL</div>
                    <div class="box P texto centro">CERRAR SESION</div>

                </div>

            </div>
        </div>
    )
};

export default Index;
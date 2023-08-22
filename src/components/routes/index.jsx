import React from "react";
import Menu from "../menu.jsx";
import '../css/index.css'

const Index = () => {

    return (
        <div id="wrapper">
            <Menu />
            <div id="content">
                <div class="container" >

                    <div class="box P texto centro">
                        <h1>REGISTRARSE</h1>
                        <div className="">
                            <form action="">
                                <label htmlFor=""> 
                                    <input type="email" name="" id="" placeholder="Usuario" className="" />
                                </label>
                                <label htmlFor=""> 
                                    <input type="password" name="" id="" placeholder="Contraseña" />
                                </label>
                            </form>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
    )
};

export default Index;
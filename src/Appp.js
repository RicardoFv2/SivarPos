import './App.css';
import Menu from './components/menu';
import Formulario from './components/formulario';
import Nuevo from './components/nuevo';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

function Appp() {
  
  
    return (
        <div>
              <Menu></Menu>
  
              <div className="centro">
              <h2>Formulario</h2>
              <Formulario></Formulario>
              </div>
        </div>
      
    );
  }
  
  export default Appp;
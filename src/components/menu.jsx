import icoeth from './img/etereo.png';
import icomm from './img/metamask.png';
import { Link } from 'react-router-dom';
import './css/menu.css'


const Menu = (props) => {
    return (
        <div>
            <div className="navbar">
                <div className='contenedor'>

                    <div className="logo">Blockchain</div>
                    <ul className="menu">
                        <button onClick={props.conectarWallet} className="boton" value={props.account}>Conectar wallet</button>
                    </ul>
                </div>
            </div>
            <div className="navbarr">

                <div className='contenedor'>
                    <ul className="menu">
                        <li><a id="contenido4" href="#">Inicio</a></li>


                    </ul>

                    <table>
                        <tbody>
                            <tr><div className='flex-row'><img className='icon' src={icomm}></img> {props.direccion}</div></tr>
                            <tr><div className='flex-row'><img src={icoeth}></img> {props.saldo} ETH</div></tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
};
export default Menu; 
import {NavLink} from "react-router-dom"
import {  BsCart4 } from "react-icons/bs";
function Navbar(props){
    return(
        <nav>
            <div className="icono">
                <img src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"/>
                <h1>Pizzeria Mamma Mia!</h1>
            </div>
            <div className="navbar">
                <NavLink to="carrito" ><BsCart4/> $</NavLink>
            </div>
        </nav>
    )
}
export default Navbar
import {BsCart4} from "react-icons/bs";
import Context from "../componentes/Context";
import {useContext, useState} from "react"
import {useParams} from "react-router-dom";

function Descripcion(props) {
    const {pizzas, carrito, setCarrito} = useContext(Context)
    const {id} = useParams();
    const pizzaSeleccionada = pizzas.find(pizza => pizza.id === id)

    function agregarCarrito(pizza) {
        if (!carrito.find(producto => producto.id === pizza.id)) {
            const nuevoCarrito = [...carrito, {...pizza, cantidad: 1}]
            setCarrito(nuevoCarrito)
        }
    }

    if(!pizzaSeleccionada){
        return <h1>Cargando...</h1>
    }

    return (
        <div className="card-view">
            <div className="imagen">
                <img src={pizzaSeleccionada.img}/>
            </div>
            <div className="detalles">
                <h1>{pizzaSeleccionada.name}</h1>
                <h3>{pizzaSeleccionada.desc}</h3>
                <p className="lista">Ingredientes:</p>
                {pizzaSeleccionada.ingredients.map((ingrediente, index) => (
                    <ul key={index}>
                        <li>{ingrediente}</li>
                    </ul>))}
                <div className="orden">
                    <span>Precio: ${pizzaSeleccionada.price}</span>
                    <button className="btn btn-danger" onClick={(() => agregarCarrito(pizzaSeleccionada))}>Añadir <BsCart4/>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Descripcion
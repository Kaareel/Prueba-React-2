import {useContext, useState} from "react";
import Context from "../componentes/Context";

function Carrito() {
    const {carrito, setCarrito, count, setCount} = useContext(Context)

    function sum(id) {
        const pizzaEncontrada = carrito.find((pizza) => pizza.id === id)

        const nuevaPizza = {...pizzaEncontrada, cantidad: pizzaEncontrada.cantidad + 1}
        const nuevoCarrito = carrito.filter((pizza) => pizza.id !== id)

        setCarrito([...nuevoCarrito, nuevaPizza])
    }

    function res(id) {
        const pizzaEncontrada = carrito.find((pizza) => pizza.id === id)

        if(pizzaEncontrada.cantidad > 1) {
            const nuevaPizza = {...pizzaEncontrada, cantidad: pizzaEncontrada.cantidad - 1}
            const nuevoCarrito = carrito.filter((pizza) => pizza.id !== id)

            setCarrito([...nuevoCarrito, nuevaPizza])
        }
    }

    function eliminar(id) {
        const pizzaEncontrada = carrito.find((pizza) => pizza.id === id)

        const nuevoCarrito = carrito.filter((pizza) => pizza.id !== id)

        setCarrito([...nuevoCarrito])
    }

    return (
        <div>
            <div className="card-shopping">
                <h1>Detalles del pedido:</h1>
                {carrito.map((pizza, index) => (<div className="tabla" key={index}>
                        <div className="datos-carrito">
                            <img src={pizza.img}/>
                            <h2>{pizza.name}</h2>
                        </div>
                        <div className="price">
                            <p className="style-price"> ${pizza.price * pizza.cantidad }</p>
                            <button type="button" className="btn btn-outline-danger" onClick={() => res(pizza.id)}>-</button>
                            <span>{pizza.cantidad}</span>
                            <button type="button" className="btn btn-outline-primary" onClick={() => sum(pizza.id)}>+
                            </button>
                            <button type="button" className="btn btn-outline-primary" onClick={() => eliminar(pizza.id)}>X
                            </button>
                        </div>

                    </div>
                ))}
                <div><h2>Total: $<span>{count}</span></h2></div>
            </div>
        </div>
    )
}

export default Carrito
import {useContext, useState} from "react";
import {BsFillEyeFill, BsCart4} from "react-icons/bs";
import Context from "./Context";
import Descripcion from "../pages/Descripcion";
import {useNavigate, useParams} from "react-router-dom";

function Cards(img = "", name = "", id = "", price = 0, ingredients = []) {
    const datos = useContext(Context)
    const navigate = useNavigate()

    function irADescripcion(id) {
        navigate(`/descripcion/${id}`)
    }

    function agregarCarrito(pizza) {
        if (!datos.carrito.find(producto => producto.id === pizza.id)) {

            const nuevaPizza = {...pizza, cantidad: 1}
            datos.setCarrito([...datos.carrito, nuevaPizza])
        }
    }

    return (
        <div>
            <div className="titulo">
                <h1>¡Pizzeria Mamma Mia!</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
            <div className="columna">
                {datos.pizzas.map((pizza, index) =>
                    (<div key={index}>
                            <div className="card">
                                <img src={pizza.img} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{pizza.name}</h5>
                                    {pizza.ingredients.map((ingrediente, index) => (
                                        <ul key={index}>
                                            <li>{ingrediente}</li>
                                        </ul>
                                    ))}
                                    <span className="card-text">$ {pizza.price}</span>
                                    <div className="button">
                                        <button className="btn btn-primary"
                                                onClick={(() => irADescripcion(pizza.id))}>Ver mas <BsFillEyeFill/>
                                        </button>
                                        <button className="btn btn-danger"
                                                onClick={(() => agregarCarrito(pizza))}>Añadir <BsCart4/></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Cards
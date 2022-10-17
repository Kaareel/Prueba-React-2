import Navbar from "./componentes/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";
import Context from "./componentes/Context";
import Carrito from "./pages/Carrito";
import Descripcion from "./pages/Descripcion";


function App() {
    const catalogo = "/pizzas.json"
    const [pizzas, setPizzas] = useState([])
    const [carrito, setCarrito] = useState([])
    const [count, setCount] = useState([1])

    useEffect(() => {
        async function traerPizzas() {
            try {
                const response = await fetch(catalogo)
                const data = await response.json()
                setPizzas(data)
            } catch (error) {
                alert(error)
            }
        }

        traerPizzas()
    }, [])

    useEffect(() => {
        let total = 0

        for(let pizza of carrito){
            total = total + (pizza.price * pizza.cantidad)
        }

        setCount(total)
    }, [carrito])

    return (
        <div className="App">
            <Context.Provider value={{pizzas, setPizzas, carrito, setCarrito, count, setCount}}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/descripcion/:id" element={<Descripcion/>}/>
                        <Route path="/carrito" element={<Carrito/>}/>
                    </Routes>
                </BrowserRouter>
            </Context.Provider>

        </div>
    );
}

export default App;
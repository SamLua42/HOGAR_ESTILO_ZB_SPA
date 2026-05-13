import { useState, useEffect } from "react"

const cardsOfertas = [
  [ { img: "/productos/sala/Cojines de peluches angora entero_1.jpg", nombre: "Cojines de Peluches Angora", precio: "S/. 25.00" },
    { img: "/productos/sala/Cojines con pompones_3.jpg", nombre: "Cojines con Pompones", precio: "S/. 22.00" },
    { img: "/productos/dormitorio/Cojín de peluche pelo corto_4.jpg", nombre: "Cojín de Peluche Pelo Corto", precio: "S/. 18.00" },
  ],
  [ { img: "/productos/baño/tapetesecadorapido2.jpg", nombre: "Tapetes Secado Rápido", precio: "S/. 15.00" },
    { img: "/productos/cocina/Alfombras de cocina 1 ( 2 piezas).jpg", nombre: "Alfombras de Cocina", precio: "S/. 15.00" },
    { img: "/productos/usopersonal/Toallitas humedas1.jpg", nombre: "Toallitas Húmedas", precio: "S/. 10.00" },
  ]
]

function Ofertas() {
  const [i, setI] = useState(0)
  const anterior = () => setI((prev) => (prev - 1 + cardsOfertas.length) % cardsOfertas.length)
  const siguiente = () => setI((prev) => (prev + 1) % cardsOfertas.length)
  useEffect(() =>{
    const intervalo= setInterval(() =>{
        setI((prev) => (prev+1)%cardsOfertas.length)
    },3000)
    return() => clearInterval(intervalo)
  }, [])

  return (
    <section id="ProductosOfertas">
        <h2>Productos en Oferta</h2>
        <div className="Carrusel_Ofertas">
            <button onClick={anterior}>{"<"}</button>
            <div className="Cards">
                {cardsOfertas[i].map((producto, i) => (
                <div className="Card_Ofer" key={i}>
                    <img src={producto.img} alt={producto.nombre}></img>
                    <h5>{producto.nombre}</h5>
                    <p className="precio">{producto.precio}</p>
                    <button className="Comprar">Comprar</button>
                </div>))}
            </div>
            <button onClick={siguiente}>{">"}</button>
        </div>
    </section>
  )
}

export default Ofertas;



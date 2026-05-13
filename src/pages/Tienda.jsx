import { useState } from "react"
import { productos } from "../data/datos"
import Marquee from "../components/Marquee"
import HeaderBuscador from "../components/HeaderBuscador"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ImgSala from "../assets/Sala.png"
import ImgCocina from "../assets/Cocina.png"
import ImgBaño from "../assets/Baño.png"
import ImgDormitorio from "../assets/Dormitorio.png"
import ImgSalud from "../assets/Salud.png"
import ImgUsoPersonal from "../assets/Uso personal.png"
import "../styles/tienda.css"

const categorias = [
  { nombre: "Sala", img: ImgSala },
  { nombre: "Dormitorio", img: ImgDormitorio },
  { nombre: "Baño", img: ImgBaño },
  { nombre: "Cocina", img: ImgCocina },
  { nombre: "Salud", img: ImgSalud },
  { nombre: "UsPersonal", img: ImgUsoPersonal },
]

function Tienda() {
  const [categoriaActiva, setCategoriaActiva] = useState(null)
  const [carrito, setCarrito] = useState([])
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito]
    nuevoCarrito.splice(index, 1)
    setCarrito(nuevoCarrito)
  }

  const total = carrito.reduce((acc, item) => acc + item.precio, 0)

  const finalizarCompra = () => {
    if (carrito.length === 0) return alert("El carrito está vacío")
    let mensaje = "Hola Hogar & Estilo, deseo comprar:\n"
    carrito.forEach(item => mensaje += `- ${item.nombre} (S/. ${item.precio})\n`)
    mensaje += `\nTotal: S/. ${total.toFixed(2)}`
    const url = `https://wa.me/51928025303?text=${encodeURIComponent(mensaje)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Marquee />
      <HeaderBuscador />
      <Navbar />

      <section id="Tienda">

        {/* BOTÓN CARRITO */}
        <div className="Carrito" onClick={() => setCarritoAbierto(true)}>
          <i className="bi bi-cart3"></i>
          <span className="Carrito_Count">{carrito.length}</span>
        </div>

        {/* MODAL CARRITO */}
        {carritoAbierto && (
          <div className="Carrito_Modal_Overlay">
            <div className="Carrito_Modal">
              <div className="Carrito_Modal_Header">
                <h4><i className="bi bi-cart3"></i> Mi Carrito de Compras</h4>
                <button onClick={() => setCarritoAbierto(false)}>✕</button>
              </div>
              <div className="Carrito_Modal_Body">
                {carrito.length === 0 ? (
                  <p>Tu carrito está vacío.</p>
                ) : (
                  carrito.map((item, i) => (
                    <div className="Carrito_Item" key={i}>
                      <img src={item.img} alt={item.nombre} />
                      <div>
                        <p>{item.nombre}</p>
                        <p>S/. {item.precio}</p>
                      </div>
                      <button onClick={() => eliminarDelCarrito(i)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="Carrito_Modal_Footer">
                <p className="Carrito_Total">Total: S/. {total.toFixed(2)}</p>
                <div className="Carrito_Btns">
                  <button className="Btn_Seguir" onClick={() => setCarritoAbierto(false)}>
                    Seguir Comprando
                  </button>
                  <button className="Btn_Comprar" onClick={finalizarCompra}>
                    Finalizar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORÍAS */}
        {!categoriaActiva && (
          <div id="Seccion_Categorias">
            <h2>CATEGORÍAS DESTACADAS</h2>
            <div className="Cards_Categorias">
              {categorias.map((cat, i) => (
                <div className="Card_Categoria" key={i} onClick={() => setCategoriaActiva(cat.nombre)}>
                  <img src={cat.img} alt={cat.nombre} />
                  <h5>{cat.nombre}</h5>
                  <button className="Btn_VerMas">Ver más</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCTOS */}
        {categoriaActiva && (
          <div id="Seccion_Productos">
            <button className="Btn_Volver" onClick={() => setCategoriaActiva(null)}>
              ← Volver a Categorías
            </button>
            <h2>PRODUCTOS DE {categoriaActiva.toUpperCase()}</h2>
            <div className="Cards_Productos">
              {productos[categoriaActiva].map((prod) => (
                <div className="Card_Producto" key={prod.id}>
                  <img src={prod.img} alt={prod.nombre} />
                  <h5>{prod.nombre}</h5>
                  <p>{prod.info}</p>
                  <p className="Prod_Precio">S/. {prod.precio}</p>
                  <button className="Btn_Agregar" onClick={() => agregarAlCarrito(prod)}>
                    Añadir al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      <Footer />
    </>
  )
}

export default Tienda
import Marquee from "../components/Marquee"
import HeaderBuscador from "../components/HeaderBuscador"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ImagenSobremi from "../assets/ImagenSobremi.png"

import "../styles/nosotros.css"

function Nosotros() {
  const scrollHaciaAbajo = () => {
    document.getElementById("nuestra-historia").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Marquee />
      <HeaderBuscador />
      <Navbar />

      {/* HERO */}
      <section id="Nosotros_Hero">
        <div className="Nosotros_Texto">
          <p className="Nosotros_Sub">SOBRE NOSOTROS</p>
          <h1>HOGAR & ESTILO ZB</h1>
          <p className="Nosotros_Desc">
            Somos una tienda dedicada a ofrecer productos que combina calidad, 
            confort y estilo para tu hogar. Nos enfocamos en seleccionar artículos 
            funcionales, duraderos y con diseños que transforman tus espacios en 
            lugares únicos.
          </p>
          <button className="Btn_Conocenos" onClick={scrollHaciaAbajo}>
            CONÓCENOS MÁS →
          </button>
        </div>
        <div className="Nosotros_Imagen">
          <img src= {ImagenSobremi} alt="Hogar & Estilo ZB" />
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section id="Por_Que">
        <h2>¿POR QUÉ ELEGIRNOS?</h2>
        <div className="Razones">
          <div className="Razon">
            <i className="bi bi-award"></i>
            <h4>CALIDAD GARANTIZADA</h4>
            <p>Trabajamos con productos de excelente calidad pensados para durar.</p>
          </div>
          <div className="Razon">
            <i className="bi bi-truck"></i>
            <h4>ENVÍOS RÁPIDOS</h4>
            <p>Entregamos tus pedidos de forma segura y en el menor tiempo posible.</p>
          </div>
          <div className="Razon">
            <i className="bi bi-shield-check"></i>
            <h4>COMPRA SEGURA</h4>
            <p>Tu información y pagos están protegidos para que compres con confianza.</p>
          </div>
          <div className="Razon">
            <i className="bi bi-heart"></i>
            <h4>ATENCIÓN PERSONALIZADA</h4>
            <p>Te acompañamos en cada paso para brindarte la mejor experiencia.</p>
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section id="nuestra-historia">
        <div className="Historia_Card">
          <h2>📖 Nuestra Historia</h2>
          <p>Hogar & Estilo ZB nació con la misión de llevar productos de calidad 
          a cada hogar peruano a precios accesibles.</p>
        </div>
        <div className="Historia_Card">
          <h2>🎯 Misión</h2>
          <p>Brindar productos innovadores y de calidad para mejorar la vida 
          de nuestros clientes.</p>
        </div>
        <div className="Historia_Card">
          <h2>🚀 Visión</h2>
          <p>Ser la tienda virtual líder en el Perú reconocida por calidad, 
          confianza y excelente atención.</p>
        </div>
        <div className="Historia_Card">
          <h2>💎 Valores</h2>
          <p>Honestidad, calidad, compromiso y atención personalizada 
          en cada compra.</p>
        </div>
      </section>

      {/* BANNER INFERIOR */}
      <section id="Banner_Inferior">
        <div className="Banner_Inf_Texto">
          <i className="bi bi-house-heart"></i>
          <p>Nuestro compromiso es hacer de tu hogar un lugar más cómodo, cálido y lleno de estilo.</p>
        </div>
        <button className="Btn_VerTienda">VER TIENDA →</button>
      </section>

      <Footer />
    </>
  )
}

export default Nosotros
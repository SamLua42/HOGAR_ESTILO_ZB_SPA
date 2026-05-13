import Marquee from "../components/Marquee"
import HeaderBuscador from "../components/HeaderBuscador"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../styles/formaspago.css"

function FormasPago() {
  return (
    <>
      <Marquee />
      <HeaderBuscador />
      <Navbar />

      {/* HERO */}
      <section id="FP_Hero">
        <div className="FP_Hero_Icono">
          <i className="bi bi-credit-card-2-front"></i>
        </div>
        <div className="FP_Hero_Texto">
          <h1>FORMAS DE PAGO</h1>
          <div className="FP_Linea"></div>
          <p>Elige el método que más te convenga.</p>
          <p>Todos nuestros pagos son 100% seguros.</p>
        </div>
      </section>

      {/* MÉTODOS DE PAGO */}
      <section id="FP_Metodos">
        <div className="FP_Card">
          <i className="bi bi-credit-card"></i>
          <h3>TARJETAS</h3>
          <p>Aceptamos Visa y Mastercard.</p>
          <div className="FP_Logos">
            <span className="FP_Visa">VISA</span>
            <i className="bi bi-credit-card-fill FP_Master"></i>
          </div>
        </div>
        <div className="FP_Card">
          <i className="bi bi-phone"></i>
          <h3>YAPE</h3>
          <p>Paga de forma rápida escaneando nuestro QR.</p>
          <button className="FP_Btn">Pago inmediato</button>
        </div>
        <div className="FP_Card">
          <i className="bi bi-phone-fill"></i>
          <h3>PLIN</h3>
          <p>Envía tu pago al instante de manera fácil y segura.</p>
          <button className="FP_Btn">Pago inmediato</button>
        </div>
        <div className="FP_Card">
          <i className="bi bi-bank"></i>
          <h3>TRANSFERENCIA BANCARIA</h3>
          <p>Realiza tu transferencia a nuestras cuentas bancarias.</p>
          <div className="FP_Bancos">
            <span className="FP_BCP">▶BCP</span>
            <span className="FP_Interbank">Interbank</span>
          </div>
        </div>
      </section>

      {/* CÓMO COMPRAR */}
      <section id="FP_ComoComprar">
        <h2>¿CÓMO COMPRAR?</h2>
        <div className="FP_Pasos">
          <div className="FP_Paso">
            <div className="FP_Numero">1</div>
            <i className="bi bi-cart3"></i>
            <h4>Elige tus productos</h4>
            <p>Agrega al carrito lo que más te guste.</p>
          </div>
          <div className="FP_Linea_Paso"></div>
          <div className="FP_Paso">
            <div className="FP_Numero">2</div>
            <i className="bi bi-clipboard-check"></i>
            <h4>Confirma tu pedido</h4>
            <p>Revisa tu pedido y completa tus datos de envío.</p>
          </div>
          <div className="FP_Linea_Paso"></div>
          <div className="FP_Paso">
            <div className="FP_Numero">3</div>
            <i className="bi bi-credit-card"></i>
            <h4>Realiza el pago</h4>
            <p>Elige tu método de pago favorito y completa la compra.</p>
          </div>
          <div className="FP_Linea_Paso"></div>
          <div className="FP_Paso">
            <div className="FP_Numero">4</div>
            <i className="bi bi-truck"></i>
            <h4>Recibe tu pedido</h4>
            <p>Te lo entregamos rápido y seguro en tu hogar.</p>
          </div>
        </div>
      </section>

      {/* BANNER INFERIOR */}
      <section id="FP_Banner">
        <div className="FP_Banner_Texto">
          <i className="bi bi-shield-check"></i>
          <p>Tu seguridad es nuestra prioridad. Todos los pagos están protegidos.</p>
        </div>
        <button className="FP_Btn_Tienda">IR A TIENDA →</button>
      </section>

      <Footer />
    </>
  )
}

export default FormasPago
import { useState } from "react"
import Marquee from "../components/Marquee"
import HeaderBuscador from "../components/HeaderBuscador"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/contacto.css"

function Contacto() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    mensaje: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombres || !form.apellidos || !form.correo || !form.mensaje) {
      alert("Por favor, completa los campos obligatorios.")
      return
    }
    const texto = `Hola, mi nombre es ${form.nombres} ${form.apellidos}. Mi correo es ${form.correo} y mi teléfono es ${form.telefono}. Mi mensaje: ${form.mensaje}`
    const url = `https://wa.me/51928025303?text=${encodeURIComponent(texto)}`
    alert("¡Gracias por contactarnos! Te redirigiremos a WhatsApp.")
    window.open(url, "_blank")
    setForm({ nombres: "", apellidos: "", correo: "", telefono: "", mensaje: "" })
  }

  return (
    <>
      <Marquee />
      <HeaderBuscador />
      <Navbar />

      <section className="contenedor-contacto">
        <div className="info-contacto">
          <h2>CONTÁCTANOS</h2>
          <p>Contáctanos por teléfono, correo o visítanos en cualquiera de nuestras redes. ¡Estaremos felices de atenderte!</p>
          <div className="redes">
            <p>Comparte en nuestras redes sociales</p>
          </div>
        </div>
      </section>

      <section className="contenedor-formulario">
        <div className="formulario">
          <h2>Estamos aquí para ti</h2>
          <p>Ya sea para resolver tus dudas, personalizar tu pedido o simplemente conocernos, estaremos encantados de ayudarte.</p>
          <div className="form-contacto">
            <div className="fila">
              <input type="text" name="nombres" placeholder="Nombres" value={form.nombres} onChange={handleChange} required />
              <input type="text" name="apellidos" placeholder="Apellidos" value={form.apellidos} onChange={handleChange} required />
            </div>
            <div className="fila">
              <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} required />
              <input type="tel" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
            </div>
            <textarea rows="5" name="mensaje" placeholder="Escribe tu mensaje..." value={form.mensaje} onChange={handleChange} required></textarea>
            <button className="Btn_Enviar" onClick={handleSubmit}>Enviar</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contacto
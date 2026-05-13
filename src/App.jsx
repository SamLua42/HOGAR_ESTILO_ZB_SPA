import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Tienda from "./pages/Tienda"
import Contacto from "./pages/Contacto"
import FormasPago from "./pages/FormasPago"

import "./styles/estilos.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/formas-pago" element={<FormasPago />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
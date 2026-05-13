import Productos from "../assets/Economico.png"
import Importaciones from "../assets/Calidad.png"
import Articulos from "../assets/Nuevo.png"
import Envios from "../assets/Envios 2.png"

function Ventajas() {
    return(
        <section id="Ventajas">
            <div className="Ventaja1">
                <div className="icono-circular">
                    <img src={Productos} alt="Economico"></img>
                </div>
                <h4>Productos</h4>
                <p>muy económicos</p>
            </div>
            <div className="Ventaja2">
                <div className="icono-circular">
                    <img src={Importaciones} alt="Calidad"></img>
                </div>
                <h4>Importaciones</h4>
                <p>de buena calidad</p>
            </div>
            <div className="Ventaja3">
                <div className="icono-circular">
                    <img src={Articulos} alt="New"></img>
                </div>
                <h4>Artículos</h4>
                <p>novedosos</p>
            </div>
            <div className="Ventaja4">
                <div className="icono-circular">
                    <img src={Envios} alt="Envio"></img>
                </div>
                <h4>Envíos</h4>
                <p>rápidos y seguros</p>
            </div>
        </section>
    )
}

export default Ventajas;
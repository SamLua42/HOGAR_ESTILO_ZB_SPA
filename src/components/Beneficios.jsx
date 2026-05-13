import Pago from "../assets/Pago.png"
import Envios from "../assets/Envios 3.png"
import Combo from "../assets/Oferta.png"

function Beneficios() {
    return(
        <section id="Beneficios">
            <div className="Pago">
                <img src={ Pago } alt="Tarjta"></img>
                <h4>Pagos de forma cómoda<br/>y segura</h4>
            </div>
            <div className="Envios">
                <img src={ Envios } alt="Camion"></img>
                <h4>Envíos a Nivel Nacional<br/>y 100% seguros</h4>
            </div>
            <div className="Combo">
                <img src={ Combo } alt="Combo"></img>
                <h4>Grandes ofertas y<br/>muchas promociones</h4>
            </div>
        </section>
    )

}

export default Beneficios;
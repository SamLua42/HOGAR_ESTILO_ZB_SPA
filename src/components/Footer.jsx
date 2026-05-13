import Logo from "../assets/Logo3.png"
import WSP from "../assets/Wsp3.png"
import FB from "../assets/Fb3.png"
import TIKTOK from "../assets/TikTok3.png"
import INSTA from "../assets/Insta3.png"

function Footer() {
    return(
        <>
        <section id="Pie1">
        <div className="Logo2"> 
            <img src={ Logo } alt="Logo"></img>
            <br/>
            <div className="Pie-Texto-Logo">
                <p>Somos una Tienda Virtual,
                con productos importados
                para su hogar y salud,
                de calidad y económicos.</p>
            </div>
        </div>
        <div className="SobreNosotros">
            <h5>Sobre Nosotros</h5>
            <ul>
                <li><a href="Nosotros.html">Quiénes Somos</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Ofertas</a></li>
                <li><a href="">Comentarios</a></li>
            </ul>
        </div>
        <div className="Pagos-Envios"> 
            <div className="Pagos">
                <h5>Formas de Pagos</h5>
                <ul>
                    <li>Efectivo</li>
                    <li>Yape o Plin</li>
                </ul>
            </div>
            <div className="Envios2">
                <h5>Formas de Envíos</h5>
                <ul>
                    <li>Delivery</li>
                    <li>Shalom</li>
                </ul>
            </div>
        </div>
        <div className="Ayuda">
            <h5>Ayuda al Cliente</h5>
            <ul>
                <li><a href="mailto">E-mail: lourdeskaster@hotmail.com</a></li>
                <li><a href="">WhatsAap: +51 928 025 303</a></li>
            </ul>
        </div>
        <div className="Redes2"> 
            <div className="wsp">
             <a href="https://wa.me/51928025303" target="_blank">
                <img src={ WSP } alt="Whatsaap"></img>
            </a>
            </div>
            <a href="https://www.facebook.com/share/1BLAzR6YT8/" target="_blank">
                <img src={ FB } alt="Facebook"></img>
            </a>
            <a href="" target="_blank">
                <img src={ TIKTOK } alt="Tik Tok"></img>
            </a>
            <a href="https://www.instagram.com/lourdeszea38?igsh=eW9kdW1reDRjbXNr" target="_blank">
                <img src={ INSTA } alt="Instagram"></img>
            </a>
        </div>
    </section> 
    <section id="Pie2">
        <div className="FinalCentro">
          <h4>Tienda Virtual Hogar & Estilo ZB Copyright © 2025 Todos los Derechos Reservados</h4>
        </div>
    </section>
    </>
    )
}

export default Footer;
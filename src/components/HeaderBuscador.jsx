import Logo from "../assets/Logo4.png"

function HeaderBuscador(){
    return(
        <section id="Logo_Header">
            <div className="Logo1">
                <img src={Logo} alt="Logo Hogar & Estilo ZB"></img>
            </div>
            <div className="Barra_Busquedad">
                <div className="Buscador">
                    <input type="text" placeholder="Buscar productos ........"/>
                    <i className="bi bi-search"></i>                   
                </div>
            </div>
            <div className="Envios_Compras">
                <div className="Envios_1">
                    <i className="bi bi-truck"></i>
                </div>
                <div className="Compras_1">
                    <i className="bi bi-cart4"></i>
                </div>
            </div>
        </section>
    )
}

export default HeaderBuscador;
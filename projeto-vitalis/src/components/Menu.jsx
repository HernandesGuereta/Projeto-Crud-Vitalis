
function Menu() {
    return (
       <nav>
        <div className="logo">
            <span className="nome">Vitalis</span>
            <span className="subtitulo">Hemocentro</span>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/estoque">Gestão de Estoque</a></li>
        </ul>
       </nav>
    )
}

export default Menu
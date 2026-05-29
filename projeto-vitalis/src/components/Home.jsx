function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Bem-vindo ao Vitalis</h1>
                <p className="home-content-p">Gerencie o estoque de sangue do hemocentro de forma eficiente e segura.</p>
                <div className="cards">
                    <div className="reg-entrada-card">
                        <h2>Registrar Entrada de Sangue</h2>
                        <p>Adicione novas doações ao estoque e mantenha o controle atualizado.</p>
                    </div>
                    <div className="reg-saida-card">
                        <h2>Registrar Saída de Sangue</h2>
                        <p>Registre as transfusões e mantenha o estoque sempre atualizado.</p>
                    </div>
                    <div className="edit-card">
                        <h2>Editar Estoque</h2>
                        <p>Faça ajustes e correções no estoque de sangue conforme necessário.</p>
                    </div>
                </div>
                <button className="botao"><a href="/Estoque">Ir para a Gestão de Estoque →</a></button>
            </div>
        </div>
    )
}

export default Home
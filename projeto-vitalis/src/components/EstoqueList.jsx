import { useNavigate } from "react-router-dom";

function EstoqueList({
  movimentacoes = [],
  excluirMovimentacao,
  selecionarMovimentacaoParaEditar,
}) {
  const navigate = useNavigate();

  const totalEntradas = movimentacoes
    .filter((item) => item.tipo === "Entrada")
    .reduce((total, item) => total + Number(item.quantidade), 0);

  const totalSaidas = movimentacoes
    .filter((item) => item.tipo === "Saída")
    .reduce((total, item) => total + Number(item.quantidade), 0);

  function editarItem(item) {
    selecionarMovimentacaoParaEditar(item);
    navigate("/nova-movimentacao");
  }

  return (
    <div className="estoque-list-container">
      <div className="estoque-list-cabecalho">
        <h2 className="estoque-list-titulo">Gestão de Estoque</h2>

        <button
          className="estoque-list-botao-nova-movimentacao"
          onClick={() => navigate("/nova-movimentacao")}
        >
          + Nova Movimentação
        </button>
      </div>

      <div className="estoque-list-cards">
        <div className="estoque-list-card estoque-list-card-entrada">
          <h3>Entradas</h3>
          <p>{totalEntradas}</p>
        </div>

        <div className="estoque-list-card estoque-list-card-saida">
          <h3>Saídas</h3>
          <p>{totalSaidas}</p>
        </div>

        <div className="estoque-list-card estoque-list-card-registro">
          <h3>Registros</h3>
          <p>{movimentacoes.length}</p>
        </div>
      </div>

      <h3 className="estoque-list-subtitulo">Histórico de Movimentações</h3>

      <div className="estoque-list-tabela-container">
        <table className="estoque-list-tabela">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Sangue</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {movimentacoes.map((item) => (
              <tr key={item.id}>
                <td>{item.tipo}</td>
                <td>{item.sangue}</td>
                <td>{item.quantidade}</td>
                <td>
                  <button
                    className="estoque-list-botao-editar"
                    onClick={() => editarItem(item)}
                  >
                    Editar
                  </button>

                  <button
                    className="estoque-list-botao-excluir"
                    onClick={() => excluirMovimentacao(item.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}

            {movimentacoes.length === 0 && (
              <tr>
                <td colSpan="4">Nenhuma movimentação cadastrada.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EstoqueList;
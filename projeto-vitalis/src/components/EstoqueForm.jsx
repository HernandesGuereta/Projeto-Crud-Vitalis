import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EstoqueForm({
  adicionarMovimentacao,
  editarMovimentacao,
  movimentacaoEditando,
}) {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState(
    movimentacaoEditando ? movimentacaoEditando.tipo : "Entrada"
  );

  const [sangue, setSangue] = useState(
    movimentacaoEditando ? movimentacaoEditando.sangue : "A+"
  );

  const [quantidade, setQuantidade] = useState(
    movimentacaoEditando ? movimentacaoEditando.quantidade : ""
  );

  const [motivo, setMotivo] = useState(
    movimentacaoEditando ? movimentacaoEditando.motivo : ""
  );

  const [operador, setOperador] = useState(
    movimentacaoEditando ? movimentacaoEditando.operador : ""
  );

  const [observacoes, setObservacoes] = useState(
    movimentacaoEditando ? movimentacaoEditando.observacoes : ""
  );

  function salvarMovimentacao(e) {
    e.preventDefault();

    if (movimentacaoEditando) {
      const movimentacaoAtualizada = {
        id: movimentacaoEditando.id,
        tipo,
        sangue,
        quantidade,
        motivo,
        operador,
        observacoes,
      };

      editarMovimentacao(movimentacaoAtualizada);
    } else {
      const novaMovimentacao = {
        id: Date.now(),
        tipo,
        sangue,
        quantidade,
        motivo,
        operador,
        observacoes,
      };

      adicionarMovimentacao(novaMovimentacao);
    }

    navigate("/Estoque");
  }

  return (
    <div className="estoque-form-container">
      <h1 className="estoque-form-titulo">
        {movimentacaoEditando
          ? "Editar Movimentação"
          : "Registrar Movimentação"}
      </h1>

      <p className="estoque-form-subtitulo">
        Registre entrada ou saída de bolsas de sangue no estoque.
      </p>

      <form className="estoque-formulario" onSubmit={salvarMovimentacao}>
        <label className="estoque-form-label">Tipo de Movimentação</label>

        <div className="estoque-form-tipo-container">
          <button
            type="button"
            className={
              tipo === "Entrada"
                ? "estoque-form-tipo-botao estoque-form-tipo-entrada-ativo"
                : "estoque-form-tipo-botao"
            }
            onClick={() => setTipo("Entrada")}
          >
            Entrada
          </button>

          <button
            type="button"
            className={
              tipo === "Saída"
                ? "estoque-form-tipo-botao estoque-form-tipo-saida-ativo"
                : "estoque-form-tipo-botao"
            }
            onClick={() => setTipo("Saída")}
          >
            Saída
          </button>
        </div>

        <div className="estoque-form-linha-dupla">
          <div>
            <label className="estoque-form-label">Tipo Sanguíneo</label>

            <select
              className="estoque-form-campo"
              value={sangue}
              onChange={(e) => setSangue(e.target.value)}
            >
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <div>
            <label className="estoque-form-label">Quantidade (Bolsas)</label>

            <input
              className="estoque-form-campo"
              type="number"
              placeholder="Ex: 12"
              value={quantidade}
              required
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
        </div>

        <label className="estoque-form-label">Motivo / Origem</label>

        <input
          className="estoque-form-campo"
          type="text"
          placeholder="Coleta rotineira"
          value={motivo}
          required
          onChange={(e) => setMotivo(e.target.value)}
        />

        <label className="estoque-form-label">Operador Responsável</label>

        <input
          className="estoque-form-campo"
          type="text"
          placeholder="Nome do operador"
          value={operador}
          required
          onChange={(e) => setOperador(e.target.value)}
        />

        <label className="estoque-form-label">Observações</label>

        <textarea
          className="estoque-form-campo"
          placeholder="Detalhes adicionais..."
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
        />

        <div className="estoque-form-acoes-container">
          <button type="submit" className="estoque-form-botao-confirmar">
            {movimentacaoEditando ? "Salvar Alterações" : "Confirmar Registro"}
          </button>

          <button
            type="button"
            className="estoque-form-botao-cancelar"
            onClick={() => navigate("/Estoque")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EstoqueForm;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Menu from "./components/Menu";
import Home from "./components/Home";
import EstoqueList from "./components/EstoqueList";
import EstoqueForm from "./components/EstoqueForm";

function App() {
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [movimentacaoEditando, setMovimentacaoEditando] = useState(null);

  function adicionarMovimentacao(novaMovimentacao) {
    setMovimentacoes([...movimentacoes, novaMovimentacao]);
  }

  function excluirMovimentacao(id) {
    const novaLista = movimentacoes.filter((item) => item.id !== id);
    setMovimentacoes(novaLista);
  }

  function selecionarMovimentacaoParaEditar(item) {
    setMovimentacaoEditando(item);
  }

  function editarMovimentacao(movimentacaoAtualizada) {
    const novaLista = movimentacoes.map((item) => {
      if (item.id === movimentacaoAtualizada.id) {
        return movimentacaoAtualizada;
      }

      return item;
    });

    setMovimentacoes(novaLista);
    setMovimentacaoEditando(null);
  }

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Estoque"
          element={
            <EstoqueList
              movimentacoes={movimentacoes}
              excluirMovimentacao={excluirMovimentacao}
              selecionarMovimentacaoParaEditar={selecionarMovimentacaoParaEditar}
            />
          }
        />

        <Route
          path="/nova-movimentacao"
          element={
            <EstoqueForm
              adicionarMovimentacao={adicionarMovimentacao}
              editarMovimentacao={editarMovimentacao}
              movimentacaoEditando={movimentacaoEditando}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
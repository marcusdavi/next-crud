import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientesMock = [
    new Cliente("Marcus", 35, "1"),
    new Cliente("Susi", 34, "2"),
    new Cliente("Thor", 5, "3"),
    new Cliente("Daiane", 40, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.idade);
  }

  return (
    <div
      className={`flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-4" cor="green">
            Novo Cliente
          </Botao>
        </div>
        <Tabela
          clientes={clientesMock}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
        <Formulario cliente={clientesMock[2]}></Formulario>
      </Layout>
    </div>
  );
}

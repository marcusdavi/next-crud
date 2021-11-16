import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = 1; //props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada
          texto="Código"
          valor={id}
          className="mb-4"
          somenteLeitura
        ></Entrada>
      ) : (
        false
      )}

      <Entrada
        texto="Nome"
        valor={nome}
        className="mb-4"
        valorMudou={setNome}
      ></Entrada>

      <Entrada
        texto="Idade"
        tipo="number"
        className="mb-4"
        valor={idade}
        valorMudou={setIdade}
      ></Entrada>
      <div className="flex justify-end mt-7">
        <Botao cor="blue" className="mr-2">
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao>Cancelar</Botao>
      </div>
    </div>
  );
}

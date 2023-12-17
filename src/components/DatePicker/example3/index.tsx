// O codigo pode ser alterado para definir propriedas a serem utilizadas e personalizar as cores
// Use Range: define se o calendario define apenas uma data (false) ou um alcance com data inicial e data final (true)
// Use Horario: define se o horario (inicial e final) sera utilizado
// Formato Data: define o formato da data, opcoes: ("d/m" ou "m/d"), alternativamente a data pode ser escrita por exetenso descomentando o codigo {// dateStyle: "full"} no arquivo index
// Formato Ano: define a parte do ano no formato da data, opcoes ("true" = 2023 ou "false" = 23)

// O arquivo 'DatePicker2.css' e utilizado para estilizacao de alguns componentes que nao podem ser customizados inline.

// Para manipular os dados da data e do horario utiliza-se as variveis (no exemplo abaixo é possível ver a utilizacao nas divs finais):
// Data (sem range): pode ser acessada pela variavel 'dataSelecionada'
// Data inicial (com range): pode ser acessada pela variavel 'dataInicial'
// Data final (com range): pode ser acessada pela variavel 'dataFinal'
// Horario inicial: pode ser acessada pela variavel 'horarioInicial'
// Horario final: pode ser acessada pela variavel 'horarioFinal'
// Tempo total: pode ser acessado pela variavel 'tempoTotal' que calcula (horarioFinal - horarioInicial)

import React, { useState } from "react";
import { DatePicker } from "../index";

export function DatePickerExample3() {
  const [dataSelecionada, setDataSelecionada] = useState<string | undefined>(
    undefined
  );
  const [dataInicial, setDataInicial] = useState<string | undefined>(undefined);
  const [dataFinal, setDataFinal] = useState<string | undefined>(undefined);
  const [horarioInicial, setHorarioInicial] = useState<string | undefined>(
    undefined
  );
  const [horarioFinal, setHorarioFinal] = useState<string | undefined>(
    undefined
  );
  const [tempoTotal, setTempoTotal] = useState<string | undefined>(undefined);

  const handleVariablesChange = (
    novaDataSelecionada: string | undefined,
    novaDataInicial: string | undefined,
    novaDataFinal: string | undefined,
    novoHorarioInicial: string | undefined,
    novoHorarioFinal: string | undefined,
    novoTempoTotal: string | undefined
  ) => {
    setDataSelecionada(novaDataSelecionada);
    setDataInicial(novaDataInicial);
    setDataFinal(novaDataFinal);
    setHorarioInicial(novoHorarioInicial);
    setHorarioFinal(novoHorarioFinal);
    setTempoTotal(novoTempoTotal);
  };

  return (
    <section className="h-96 w-full relative flex justify-center items-center">
      <div className="flex bg-[#1d272c] gap-4 p-2">
        <DatePicker
          useRange={false}
          useHorario={true}
          formatoData={"d/m"}
          formatoAno={false}
          onVariablesChange={handleVariablesChange}
        />
      </div>
      <div className="flex flex-col m-2">
        {dataSelecionada ? <p>Data: {dataSelecionada}</p> : ""}
        {dataInicial ? <p>Data Inicial: {dataInicial}</p> : ""}
        {dataFinal ? <p>Data Final: {dataFinal}</p> : ""}
      </div>
      <div className="flex flex-col m-2">
        {horarioInicial ? <p>Horario Inicial: {horarioInicial}</p> : ""}
        {horarioFinal ? <p>Horario Final: {horarioFinal}</p> : ""}
        {tempoTotal ? <p>Tempo Total: {tempoTotal}</p> : ""}
      </div>
    </section>
  );
}

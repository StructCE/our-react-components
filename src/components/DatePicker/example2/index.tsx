// Proposta do exemplo: Calendario para selecionar uma data inicial, uma data final e horário, a data está no formato americano - mm/dd/aa
// O codigo pode ser alterado para definir propriedas a serem utilizadas e personalizar as cores
// Use Range: define se o calendario define apenas uma data ou um alcance com data inicial e data final
// Use Horario: define se o horario (inicial e final) sera utilizado
// Formato Data: define o formato da data, opcoes: ("d/m" ou "m/d"), alternativamente a data pode ser escrita por exetenso descomentando o codigo {// dateStyle: "full"} nos arquivos Calendario e RangeCalendario
// Formato Ano: define a parte do ano no formato da data, opcoes ("true" = 2023 ou "false" = 23)
// Cor fundo: define a cor do fundo do calendario, aceita apenas cores no formato hex ("#ffffff")
// Cor texto: define a cor do texto de do icone do calendario, aceita aoenas cores no formato extenso do tailwind css ("white", "black")
// Cor hover: define a cor do fundo do texto ao passar o mouse sobre, aceita apenas cores no formato hex ("#ffffff")
// Cor selecionado: define a cor do fundo do texto ao selecionar uma data ou um range de datas., aceita apenas cores no formato hex ("#ffffff")

// Para manipular os dados do horario deve-se acessar o arquivo DatePicker Calendario ou RangeCalendario
// Hora inicial: pode ser acessada pela variavel 'startTime'
// Hora final: pode ser acessada pela variavel 'endTime'
// Tempo total: pode ser acessado pela variavel 'totalTime' que calcula (endTime - startTime)

// Para manipular os dados da data deve-se acessar os arquivos Calendario ou RangeCalendario
// Data única: pode ser acessada pela variavel 'selectedDate' e formatada usando a sintaxe {formatarData(formatter.format(selectedDate.toDate(getLocalTimeZone())))}
// Data inicial (range): pode ser acessada pela variavel 'range.start' e formatada usando a sintaxe {formatarData(formatter.format(range.start.toDate(getLocalTimeZone())))}
// Data final (range): pode ser acessada pela variavel 'range.end' e formatada usando a sintaxe {formatarData(formatter.format(range.end.toDate(getLocalTimeZone())))}

import React from "react";
import { DatePicker } from "../DatePicker";

export function DatePickerExample2() {
  return (
    <section className="h-96 w-full relative flex flex-col justify-center items-center">
      <div className="flex bg-[#1d272c] gap-4 p-2">
        <DatePicker
          useRange={true}
          useHorario={false}
          formatoData={"m/d"}
          formatoAno={false}
          corfundo={"#12191d"}
          cortexto={"white"}
          corhover={"#1d272c"}
          corselecionado={"#03a9f4"}
        />
      </div>
    </section>
  );
}

// Considerações:
// Quando roda a primeira vez, algumas cores podem bugar, tendo que colocar o código hex no lugar da var, depois pode colocar a var de volta
// A varáveis de hora e data não podem ser acessadas nesse arquivo.

// Proposta do exemplo: Calendario para selecionar uma data e horário, a data está no formato brasileiro - dd/mm/aaaa

// O codigo pode ser alterado para definir propriedas a serem utilizadas e personalizar as cores
// Use Range: define se o calendario define apenas uma data ou um alcance com data inicial e data final
// Use Horario: define se o horario (inicial e final) sera utilizado
// Formato Data: define o formato da data, opcoes: ("d/m" ou "m/d"), alternativamente a data pode ser escrita por exetenso descomentando o codigo {// dateStyle: "full"} nos arquivos Calendario e RangeCalendario
// Formato Ano: define a parte do ano no formato da data, opcoes ("true" = 2023 ou "false" = 23)

// Para alterar a estilizacao deve-se acessar o arquivo 'DatePicker.css' modificar as cores no comeco do codigo
// Para uma estilizacao mais personalizada e necessario acessar os arquivos DatePicker, Calendario ou RangeCalendario e modificar o que desejar nas className's

// Para manipular os dados do *horario* deve-se acessar o arquivo DatePicker
// Hora inicial: pode ser acessada pela variavel 'startTime'
// Hora final: pode ser acessada pela variavel 'endTime'
// Tempo total: pode ser acessado pela variavel 'totalTime' que calcula (endTime - startTime)

// Para manipular os dados da *data* deve-se acessar os arquivos Calendario ou RangeCalendario
// Data unica: pode ser acessada pela variavel 'selectedDate' e formatada usando a sintaxe {formatarData(formatter.format(selectedDate.toDate(getLocalTimeZone())))}
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
        />
      </div>
    </section>
  );
}

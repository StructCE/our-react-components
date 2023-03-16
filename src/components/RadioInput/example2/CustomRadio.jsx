import styled, { css } from "styled-components";

const Container = styled.div`
  input {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 6px;
  }
`;

const CustomRadioIcon = styled.div`
  width: 2rem;
  aspect-ratio: 1 / 1;
  border-radius: 100vmax;
  border: black solid 2px;
  align-self: center;

  /* desestruturando os props passado para o CustomRadioIcon, mudando estilo se estiver selecionado  */
  ${({ checked }) =>
    checked &&
    css`
      background-color: green;
    `}
`;

// Copiando e modificando o RadioInput original:

// Objetivo da mudança:
// - Isolar a aparência do input radio no componente

// Para isso, foi necessário:
// - Criar um novo componente CustomRadio, que recebe os props do RadioInput original
// - Desestruturar a propriedade "checked" do props, para que ele exista não só no input,
//    mas também Icone customizado, que está controlando a aparência do input
export function CustomRadio({ children, checked, id, ...props }) {
  return (
    <Container>
      <input checked={checked} id={id} {...props} type="radio" />
      <label htmlFor={id}>
        <CustomRadioIcon checked={checked} />
        {/* rest of label */}
        {children}
      </label>
    </Container>
  );
}

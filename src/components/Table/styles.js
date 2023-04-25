import styled from "styled-components";

const Container = styled.table`
  border-collapse: collapse;

  font-size: 1.4rem;
  text-align: left;
  /* Estilização de cores pode
    principalmente ser controlada somente
    com as 2 próximas props
  */
  color: white;
  background-color: rgba(0, 0, 0, 0.7);

  margin-inline: 1rem;

  caption {
    background-color: inherit;
    backdrop-filter: contrast(0%);
    font-weight: 700;
    font-size: min(10vw, 2rem);
    text-transform: capitalize;
  }

  caption,
  td,
  th {
    padding: 0.7rem 2rem;
  }

  tbody tr:nth-of-type(2n + 1) {
    background-color: rgba(255, 255, 255, 0.06);
  }

  @media only screen and (max-width: 800px) {
    td {
      display: grid;

      /* Alterável: */
      grid-template-columns: 10ch auto;
    }

    th {
      display: none;
    }

    td::before {
      content: attr(data-cell);

      /* Alterável: */
      font-weight: 700;
      text-transform: lowercase;
    }
  }
`;

const ActionButton = styled.button`
  border: none;
  background-color: transparent;
  color: currentColor;
  display: flex;
  font-size: calc(1em - 0.4rem);
  align-items: center;
  gap: 0.2rem;

  cursor: pointer;
  transition: transform 100ms ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const TableStyles = {};
TableStyles.Container = Container;
TableStyles.ActionButton = ActionButton;

export { TableStyles };

import styled from "styled-components";

export const TableContainer = styled.table`
  font-size: 1.4rem;
  text-align: left;
  border-collapse: collapse;
  /* Estilização de cores pode
    principalmente ser alterada somente
    com as 2 próximas props
  */
  color: white;
  background-color: rgba(0, 0, 0, 0.7);

  caption {
    background-color: inherit;
    backdrop-filter: contrast(0%);
    font-weight: 700;
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

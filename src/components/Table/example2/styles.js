import styled from "styled-components";
import { Table } from "..";

export const StyledPokeTable = styled(Table)`
  color: #ffde00;
  background-color: #cc0000;

  caption {
    text-shadow: -1.8px -1.8px 0 #3b4cca, 1.8px -1.8px 0 #3b4cca,
      -1.8px 1.8px 0 #3b4cca, 1.8px 1.8px 0 #3b4cca;
  }

  tbody tr:nth-of-type(2n + 1) {
    background-color: #ffde0020;
  }
`;

export const PageLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

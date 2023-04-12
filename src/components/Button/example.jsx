import styled from "styled-components";
import { Button } from ".";

const PageLayout = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ButtonExample() {
  return (
    <PageLayout>
      <Button>Olá Mundo</Button>
    </PageLayout>
  );
}

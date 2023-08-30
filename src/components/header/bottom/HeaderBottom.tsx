import { styled } from "styled-components";
import Nav from "./buttons/Nav";

const HeaderBottom = () => {
  return (
    <Container>
      <Nav />
    </Container>
  );
};

export default HeaderBottom;

const Container = styled.div`
  height: 8vh;
  background: coral;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

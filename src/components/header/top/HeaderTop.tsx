import { styled } from "styled-components";
import Title from "./Title";
import Icons from "./Icons";

const HeaderTop = () => {
  return (
    <Container>
      <Title/>
      <Icons/>
    </Container>
  );
};

export default HeaderTop;

const Container = styled.div`
  height: 8vh;
  background: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

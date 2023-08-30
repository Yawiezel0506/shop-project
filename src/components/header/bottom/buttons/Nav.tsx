import { styled } from "styled-components";
import HeadersButtons from "./HeaderButtons";
import HeaderSearch from "./HeaderSearch";

const Nav =()=> {
    return (
        <Container>
            <HeadersButtons/>
            <HeaderSearch/>
        </Container>
    )
}

export default Nav

const Container = styled.div`
    background: purple;
    margin: 0 auto;
    width: 80vw;
    display: flex;
    justify-content: space-between;

`
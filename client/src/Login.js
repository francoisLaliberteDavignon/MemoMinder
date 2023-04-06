import { useAuth0 } from "@auth0/auth0-react"
import styled from "styled-components";

const Login = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <Header>

      </Header>
      <Main>
        <Left>
          <h4>MemoMinder</h4>
          <Slogan>A journaling app to train your mind </Slogan  >
          <Description>Your personal assistant, daily journal, brain dump. Find yourself again </Description>
          <GetStarted onClick={() => loginWithRedirect()}>Get Started</GetStarted>
        </Left>
        <Right>asdsd

        </Right>

      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 330px;
`

const Header = styled.div`
  background-color: var(--color-pink);
  height: 100px;
  width: 100vw;
`

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 15vh;
`

const Left = styled.div`
  height: 60vh;
  width: 40%;
  border: 1px solid red;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Slogan = styled.h1`
  text-align: left;
  padding-top: 50px;
  padding-bottom: 50px;
`
const Description = styled.h6`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px; 
  font-weight: normal;
`

const Right = styled.div`
  border: 1px solid red;
  height: 60vh;
  width: 40%;

`


const GetStarted = styled.button`
    background-color: var(--color-gray);
    border-radius: 15px;
    font-family: var(--font-heading);
    font-size: 25px;
    color: black;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 40px;
    transition: all 0.3s ease;
    border: 1px lightgray solid;
    &:hover {
      background-color: var(--color-pink);
      box-shadow:   19px -19px var(--color-sand);
    }
`

export default Login
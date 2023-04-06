import { useAuth0 } from "@auth0/auth0-react"
import styled from "styled-components";

const Login = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <LoginHeader>
        <LoginButton onClick={() => loginWithRedirect()}>Login</LoginButton>
      </LoginHeader>
      <Main>
        <Left>
          <h4>MemoMinder</h4>
          <Slogan>A journaling app to train your mind </Slogan  >
          <Description>Your personal assistant, daily journal, brain dump. Find yourself again.</Description>
          <GetStarted onClick={() => loginWithRedirect()}>Get Started</GetStarted>
        </Left>
        <Right>
          <Container>***
            <Container2>***</Container2>
            <Row>
              <Container3>***</Container3>
              <Container4></Container4> 
            </Row>
          </Container>
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

const LoginHeader = styled.div`
  background-color: var(--color-pink);
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`

const LoginButton = styled.button`
    background-color: var(--color-gray);
    border-radius: 15px;
    font-family: var(--font-heading);
    font-size: 15px;
    margin: 15px;
    color: black;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 40px;
    transition: all 0.3s ease;
    border: 1px lightgray solid;
    &:hover {
      background-color: var(--color-orange);
      box-shadow: none;;
    }
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
  height: 60vh;
  width: 40%;
  padding: 25px;
`

const Container = styled.div`
  font: var(--color-pink);
  border: 5px solid var(--color-pink);
  border-radius: 15px;
`

const Container2 = styled.div`
  font: var(--color-pink);
  border: 5px solid var(--color-pink);
  margin: 10px;
  border-radius: 15px;
  height: 15vh;
`

const Row = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: space-around;
`
const Container3 = styled.div`
  font: var(--color-pink);
  margin: 10px;
  border: 5px solid var(--color-pink);
  border-radius: 15px;
  height: auto;
  width: 60%;
`
const Container4 = styled.div`
  font: var(--color-pink);
  margin: 10px;
  border: 5px solid var(--color-pink);
  border-radius: 15px;
  height: 300px;
  width: 30%;
`


const GetStarted = styled.button`
    background-color: var(--color-pink);
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
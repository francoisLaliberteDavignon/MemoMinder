import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react"
import { GiFeather } from 'react-icons/gi'
import { TbScribble } from 'react-icons/tb'
import { BsCalendar2WeekFill } from 'react-icons/bs'

const Login = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>

    {/* The header is simple and not imported as a separate component */}

      <LoginHeader>
        <div>
          <Logo >Logo here!</Logo>
          <Scribble/>
        </div>
        <LoginButton onClick={() => loginWithRedirect()}>Login</LoginButton>
      </LoginHeader>
    
    {/* The main page showcases a short description and a simple representation 
        of the site */}

      <Main className="main">
        <Left>
          <h4>MemoMinder</h4>
          <Slogan>A journaling app to train your mind </Slogan  >
          <Description>Your personal assistant, daily journal, brain dump. Find yourself again.</Description>
          <GetStarted onClick={() => loginWithRedirect()}>Get Started</GetStarted>
        </Left>
        <Right>
          <Container>
            <Row>
            <Container2></Container2>
            </Row>
            <Row>
              <Container3><CalendarLogo/></Container3>
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
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  
`

const Logo = styled(GiFeather)`
  height: 50px;
  width: 50px;
  transform: rotate(-25deg);
`

const Scribble = styled(TbScribble)`
  position: relative;
  height: 15px;
  width: 25px;
  left: -40px;
  top: 15px;
` 

const LoginButton = styled.button`
    background-color: var(--color-gray);
    border-radius: 15px;
    font-family: var(--font-heading);
    font-size: 15px;
    margin: 10px;
    color: black;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 1px lightgray solid;
    &:hover {
      transition: all 0.3s ease-in-out;
      z-index: 5;
      box-shadow: 8px 8px black;
    }
`

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 15vh;
  height: 100%;
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
  box-shadow: 10px 5px black;
  fill: black;
`

const Container2 = styled.div`
  font: var(--color-pink);
  border: 5px solid var(--color-pink);
  margin: 10px;
  border-radius: 15px;
  height: 15vh;
  width: 92%;
  box-shadow: 10px 5px black;
  fill: black;
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
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-pink);
  font-size: 150px;
  box-shadow: 10px 5px black;
  fill: black;
`

const CalendarLogo = styled(BsCalendar2WeekFill)`

`
const Container4 = styled.div`
  font: var(--color-pink);
  margin: 10px;
  border: 5px solid var(--color-pink);
  border-radius: 15px;
  height: 300px;
  width: 30%;
  box-shadow: 10px 5px black;
  fill: black;
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
    transition: all 0.33 s ease;
    border: 1px lightgray solid;
    &:hover {
      background-color: var(--color-pink);
      box-shadow:   8px 8px black;
    }
`

export default Login
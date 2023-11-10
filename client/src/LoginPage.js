import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { GiFeather } from "react-icons/gi";
import { TbScribble } from "react-icons/tb";
import { BsCalendar2WeekFill } from "react-icons/bs";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <LoginHeader>
        <div>
          <Logo>Logo here!</Logo>
          <Scribble />
        </div>
        <LoginButton onClick={() => loginWithRedirect()}>Login</LoginButton>
      </LoginHeader>

      <Main className="main">
        <Left>
          <h4>MemoMinder</h4>
          <Slogan>A journaling app to train your mind </Slogan>
          <Description>
            Your personal assistant, daily journal, brain dump. Find yourself
            again.
          </Description>
          <GetStarted onClick={() => loginWithRedirect()}>
            Get Started
          </GetStarted>
        </Left>
        <Right>
          <Container>
            <Header />
            <Row>
              <Container3>
                <CalendarLogo />
              </Container3>
              <Container4 />
            </Row>
          </Container>
        </Right>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 330px;
  overflow-y: hidden;
`;

const LoginHeader = styled.div`
  background-color: var(--color-pink);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const Logo = styled(GiFeather)`
  height: 50px;
  width: 50px;
  transform: rotate(-25deg);
`;

const Scribble = styled(TbScribble)`
  position: relative;
  height: 15px;
  width: 25px;
  left: -40px;
  top: 15px;
`;

const LoginButton = styled.button`
  height: 48px;
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
`;

const Main = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding: 5vh 15vh;
`;

const Left = styled.div`
  width: 40%;
  flex: 0 0 50%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Slogan = styled.h1`
  text-align: left;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const Description = styled.h6`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px;
  font-weight: normal;
`;

const Right = styled.div`
  display: flex;
  width: 40%;
  flex: 0 0 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  font: var(--color-pink);
  border: 5px solid var(--color-pink);
  border-radius: 15px;
  box-shadow: 10px 5px black;
`;

const Header = styled.div`
  border: 5px solid var(--color-pink);
  margin: 10px;
  border-radius: 15px;
  height: 15vh;
  box-shadow: 10px 5px black;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  margin: 10px;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Container3 = styled.div`
  border: 5px solid var(--color-pink);
  border-radius: 15px;
  display: flex;
  flex: 1 1 70%;
  justify-content: center;
  align-items: center;
  color: var(--color-pink);
  font-size: 150px;
  box-shadow: 10px 5px black;
`;

const CalendarLogo = styled(BsCalendar2WeekFill)``;

const Container4 = styled.div`
  border: 5px solid var(--color-pink);
  border-radius: 15px;
  box-shadow: 10px 5px black;
  flex: 1 1 30%;
  margin-left: 16px;
`;

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
    box-shadow: 8px 8px black;
  }
`;

export default Login;

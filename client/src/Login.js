import { useAuth0 } from "@auth0/auth0-react"
import styled from "styled-components";

const Login = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <LoginButton onClick={() => loginWithRedirect()}>Login</LoginButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const LoginButton = styled.button`
 background-color: var(--color-gray);
    border-radius: 15px;
    font-family: var(--font-heading);
    font-size: 55px;
    color: black;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 40px;
    transition: all 0.3s ease;
    border: 1px lightgray solid;
    &:hover {
      background-color: var(--color-pink);
      box-shadow:   19px -19px var(--color-green);
      outline: 3px solid goldenrod ;
    }
`

export default Login
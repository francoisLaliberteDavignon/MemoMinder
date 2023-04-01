import styled from "styled-components"
import { Link } from "react-router-dom"

const Sidebar = () => {


  return (
    <Wrapper>
      <p>Add some stuff!</p>
      <Nav to={'/new/journalEntry'}>New journal log</Nav>
      <Nav to={'/new/brainer'}>New brainer</Nav>
      <Nav to={'/new/event'}>New event</Nav>
      <Nav to={'/new/affirmation'}>New affirmation</Nav>
      <Nav to={'/new/habitLog'}>New habit log</Nav>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  height: 60vh;
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

const Nav = styled(Link)`

`
import styled from "styled-components"
import { NavLink } from "react-router-dom"


const NewNavBar = () => {
  return (
    <Wrapper>
      <Navigation>
        <Nav to={'/new/journalEntry'} className="navigation">
  New journal log</Nav>
        <Nav to={'/new/brainer'} className="navigation">New brainer</Nav>
        <Nav to={'/new/reminder'} className="navigation">New reminder</Nav>
        <Nav to={'/new/affirmation'} className="navigation">New affirmation</Nav>
        <Nav to={'/new/habitLog'} className="navigation">New habit log</Nav>
      </Navigation>
    </Wrapper>
  )
}

export default NewNavBar

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  border: 1px solid lightgray;
  height: 15vh;
  width: 725px;
`

const Navigation = styled.div`
  display: flex;
  width: 725px;
  flex-direction: row;
  justify-content: space-around;
`

const Nav = styled(NavLink)`
  border: 1px solid lightgray;
  border-radius: 15px;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

`
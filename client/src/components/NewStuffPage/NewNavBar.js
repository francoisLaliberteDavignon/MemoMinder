import styled from "styled-components"
import { NavLink } from "react-router-dom"


const NewNavBar = () => {
  return (
    <Wrapper className="wrapper">
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
  border-radius: 15px;
  display:flex;
  justify-content: center;
  align-items: center;

`
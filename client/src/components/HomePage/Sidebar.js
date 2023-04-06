import styled from "styled-components"
import { Link } from "react-router-dom"

const Sidebar = () => {


  return (
    <Wrapper>
      <Nav to={'/new/journalEntry'} className="navigation">New journal log</Nav>
      <Nav to={'/new/brainer'} className="navigation">New brainer</Nav>
      <Nav to={'/new/reminder'} className="navigation">New reminder</Nav>
      <Nav to={'/new/affirmation'} className="navigation">New affirmation</Nav>
      <Nav to={'/new/habitLog'} className="navigation">New habit log</Nav>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  height: 435px;
  width: 150px;
  border-left: 10px solid var(--color-gray);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

const Nav = styled(Link)`
  text-align: center;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 15px;
  height: 75px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
`
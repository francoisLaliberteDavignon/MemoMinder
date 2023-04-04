import styled from "styled-components"
import { Link } from "react-router-dom"

const Sidebar = () => {


  return (
    <Wrapper>
      <Nav to={'/new/journalEntry'} className="navigation">New journal log</Nav>
      <Nav to={'/new/brainer'} className="navigation">New brainer</Nav>
      <Nav to={'/new/event'} className="navigation">New event</Nav>
      <Nav to={'/new/affirmation'} className="navigation">New affirmation</Nav>
      <Nav to={'/new/habitLog'} className="navigation">New habit log</Nav>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  height: 460px;
  width: 150px;
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
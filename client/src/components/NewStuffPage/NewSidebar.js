import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DateContext } from "../../DateContext"

const NewSidebar = () => {

  const { paramsToday } = useContext(DateContext)

  return (
    <Wrapper>
      <Nav to={'/homepage'}>Back to homepage</Nav>
      <Nav to={`/journal/${paramsToday}`}>Go to today's journal</Nav>
      <Nav >Logo here!</Nav>
    </Wrapper>
  )
}

export default NewSidebar

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 15px;
  height: 90vh;
  width: 20%;
`

const Nav = styled(Link)`
text-align: center;
  border: 1px solid lightgray;
  border-radius: 15px;
  height: 123px;
  width: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
`
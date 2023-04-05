import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DateContext } from "../../DateContext"
import { GiFeather } from 'react-icons/gi'
import { TbScribble } from 'react-icons/tb'

const NewSidebar = () => {

  const { paramsToday } = useContext(DateContext)

  return (
    <Wrapper className="wrapper">
      <Nav 
        to={'/homepage'} 
        className="navigation">Back to homepage</Nav>
      <Nav 
        to={`/journal/${paramsToday}`} 
        className="navigation">Go to today's journal</Nav>
      <div>
        <Logo >Logo here!</Logo>
        <Scribble/>
      </div>
    </Wrapper>
  )
}

export default NewSidebar

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

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

const Logo = styled(GiFeather)`
  height: 110px;
  width: 110px;
  transform: rotate(-25deg);
`

const Scribble = styled(TbScribble)`
  position: relative;
  height: 25px;
  width: 25px;
  left: -70px;
  top: 35px
` 
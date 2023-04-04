import styled from "styled-components"
import Greetings from "./Greetings"
import Header from "../HomePage/Header"
import Calendrier from "./Calendar"
import Sidebar from './Sidebar'

import { useContext, useState } from "react"
import { DateContext } from "../../DateContext"
import { useNavigate } from "react-router-dom"

const Homepage = () => {

  const navigate = useNavigate()
  const { paramsToday, today, setToday } = useContext(DateContext)


  let paramsDate;
  
  const handleClickDay = (e) => {
    paramsDate = (e.toISOString().substring(0, 10))
    navigate(`/journal/${paramsDate}`)
  }

  return (
    <Wrapper>
      <Top>
        <Greetings/>
        <Header paramsToday={paramsToday}/>
      </Top>
      <Main>
        <Calendrier className="calendar" handleClickDay={handleClickDay}/>
        <Sidebar/>
      </Main>
    </Wrapper>
  )
}

export default Homepage

const Wrapper = styled.div`
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 650px;
  margin: 30px;
`
const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`
const Top = styled.div`
  display: flex;
  flex-direction: row;
`
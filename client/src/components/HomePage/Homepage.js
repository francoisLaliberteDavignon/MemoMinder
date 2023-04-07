import { useContext, useState, useEffect } from "react"
import { DateContext } from "../../DateContext"
import { useNavigate } from "react-router-dom"

import styled from "styled-components"
import Header from "../../Header"
import Banner from "../../Banner"
import Calendrier from "./Calendar"
import DailySpread from "./DailySpread"
import BrainDump from '../Journal/BrainDump'

const Homepage = () => {

  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState("reminders")
  const { paramsToday, setDate } = useContext(DateContext)
  const [ dailyReminders, setDailyReminders ] = useState(null)

  setDate(paramsToday)

  const getReminders = () => {
    fetch(`/getReminders/${paramsToday}`)
    .then(res => res.json())
    .then((parsedData) => {
      console.log(parsedData.data)
      setDailyReminders(parsedData.data)
    })
    .catch(error => console.log(error.stack))
  }

  useEffect(() => {
    getReminders()
  },[])

  let paramsDate;
  
  const handleClickDay = (e) => {
    paramsDate = (e.toISOString().substring(0, 10))
    if (paramsDate !== paramsToday){
      setDate(paramsDate)
    } else {
      setDate(paramsToday)
    }
    navigate(`/dailyview/${paramsDate}`)
  }

  const handleIsActive = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <Header/>
      <Banner paramsToday={paramsToday}/>
      <Main className="wrapper">
          <Calendrier className="calendar" handleClickDay={handleClickDay}/>
          <Left class="after_media_query">
            <NavDiv>
              <NavButton 
                onClick={() => handleIsActive("reminders")}
                className={activeButton === "reminders" ? "active" : ""}
              >Today's reminders</NavButton>
              <NavButton 
                onClick={() => handleIsActive("braindump")}
                className={activeButton === "braindump" ? "active" : "" }
              >Brain dump</NavButton>
            </NavDiv>
              {activeButton === "reminders" &&
            <DailySpread
              dailyReminders={dailyReminders}
              getReminders={getReminders}/>}
              {activeButton === "braindump" &&
            <BrainDump/>}
          </Left>
      </Main>
    </>
  )
}

export default Homepage

const Main = styled.div`
  margin: 30px;
  display:flex;
  justify-content: space-around;
  flex-direction: row;
`
const Left = styled.div`
    width:40%;
    display: flex;
    flex-direction: column;;
`

const NavDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 12px;
  margin-bottom: 48px;
`

const NavButton = styled.button`
  background: none;
  font-weight: bold;
  border: none;
  &:hover{
    box-shadow: 4px 4px var(--color-green)
  }
  &.active{
    box-shadow: 4px 4px black

  }
`
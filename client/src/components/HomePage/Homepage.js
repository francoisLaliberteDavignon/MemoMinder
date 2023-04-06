import styled from "styled-components"
import Header from "../../Header"
import Banner from "../../Banner"

import Calendrier from "./Calendar"
import DailySpread from "./DailySpread"
import { useContext, useState, useEffect } from "react"
import { DateContext } from "../../DateContext"
import { useNavigate, useParams } from "react-router-dom"

const Homepage = () => {

  const navigate = useNavigate()
  const { paramsToday, today, setToday } = useContext(DateContext)

  const [ dailyReminders, setDailyReminders ] = useState(null)

  const getReminders = () => {
    fetch(`/getReminders/${today}`)
    .then(res => res.json())
    .then((parsedData) => {
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
    navigate(`/dailyview/${paramsDate}`)
  }

  return (
    <>
      <Header/>
      <Banner paramsToday={paramsToday}/>
      <Main >
          <Calendrier className="calendar" handleClickDay={handleClickDay}/>
          <DailySpread 
            dailyReminders={dailyReminders}
            getReminders={getReminders}
          />
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
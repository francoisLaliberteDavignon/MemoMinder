import styled from "styled-components"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import Header from "../../Header"
import Banner from "../../Banner"
import DailySpread from "../HomePage/DailySpread"
import DailyEntries from "./DailyEntries"
import Footer from "../../Footer"

const DailyView = () => {
  
  const { date } = useParams();
  const [ dailyReminders, setDailyReminders ] = useState(null)

  const getReminders = () => {
    fetch(`/getReminders/${date}`)
    .then(res => res.json())
    .then((parsedData) => {
      setDailyReminders(parsedData.data)
    })
    .catch(error => console.log(error.stack))
  }

  useEffect(() => {
    getReminders()
  },[])

  return (
    <>
    <Header/>
    <Banner paramsToday={date}/>
    <Main >
      <DailyEntries date={date}/>
      <DailySpread           
        getReminders={getReminders} 
        dailyReminders={dailyReminders}
        />
    </Main>
    <Footer/>
    </>
  )
}

export default DailyView

const Main = styled.div`
  margin: 30px;
  display:flex;
  justify-content: space-evenly;
  flex-direction: row;
  height: 59.5vh;
`
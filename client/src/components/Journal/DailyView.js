import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../Header"
import Banner from "../Banner";
import Footer from "../Footer";
import DailySpread from "../HomePage/DailySpread"
import DailyEntries from "./DailyEntries"


const DailyView = () => {

  // This is the second main page that renders both the journal log (daily entries) and 
  // the reminders for this specific date.
  
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
        dailyReminders={dailyReminders}/>
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
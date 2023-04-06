import styled from "styled-components"
import DailySpread from "../HomePage/DailySpread"
import DailyEntries from "./DailyEntries"
import BrainDump from './BrainDump'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../../Header"
import Banner from "../../Banner"


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
      <BrainDump/>
      <DailySpread           
        getReminders={getReminders} 
        dailyReminders={dailyReminders}
      />
      <DailyEntries/>

    </Main>
    </>
  )
}

export default DailyView

const Main = styled.div`
  margin: 30px;
  display:flex;
  justify-content: space-around;
  flex-direction: row;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`
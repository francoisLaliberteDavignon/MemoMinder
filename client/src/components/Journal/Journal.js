import styled from "styled-components"
import BrainDump from './BrainDump'
import SideLog from "./SideLog"
import DailyEntries from "./DailyEntries"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Journal = () => {
  
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
    <Wrapper className="wrapper">
      <Left>
        <SideLog 
          getReminders={getReminders} 
          dailyReminders={dailyReminders}/>
      </Left>
      <Right>
        <BrainDump getReminders={getReminders}/>
        <DailyEntries/>
      </Right>
    </Wrapper>
  )
}

export default Journal

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 30px;
  height: 650px;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`
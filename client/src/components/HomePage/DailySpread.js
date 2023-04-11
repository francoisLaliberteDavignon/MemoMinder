import { useContext } from 'react'
import styled from 'styled-components'
import ClockLoader from "react-spinners/ClockLoader"


import { DateContext } from '../../DateContext'
import Reminder from './Reminder'
import NewReminder from '../NewStuffPage/NewReminder'

const DailySpread = ({getReminders, dailyReminders}) => {

  const {paramsToday, date} = useContext(DateContext)

  return (
    <Wrapper>
      <Title>Reminders - {!date ? paramsToday : date}</Title>
      {!dailyReminders? <Loading><ClockLoader/></Loading> :
      dailyReminders.map((reminder) => {
        return <Reminder 
        reminder={reminder} 
        key={reminder._id}
        getReminders={getReminders}/>
      })}
      <NewReminder getReminders={getReminders}/>
    </Wrapper>
  )
}

export default DailySpread

const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width:40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h6`
`

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
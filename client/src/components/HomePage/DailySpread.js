import styled from 'styled-components'
import Reminder from './Reminder'
import NewReminder from '../NewStuffPage/NewReminder'
import { DateContext } from '../../DateContext'
import { useContext } from 'react'

const DailySpread = ({getReminders, dailyReminders}) => {

  const {paramsToday, date} = useContext(DateContext)

  return (
    <Wrapper>
      <Title>Reminders - {!date ? paramsToday : date}</Title>
      {!dailyReminders? <></> :
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
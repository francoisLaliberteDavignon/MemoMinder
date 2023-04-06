import styled from 'styled-components'
import Reminder from './Reminder'

const DailySpread = ({getReminders, dailyReminders}) => {

  return (
    <Wrapper>
      <Title>Reminders</Title>
      {!dailyReminders? <></> :
      dailyReminders.map((reminder) => {
        return <Reminder 
        reminder={reminder} 
        key={reminder._id}
        getReminders={getReminders}
      />
      })}
    </Wrapper>
  )
}

export default DailySpread

const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-left: 15px;
  width: 30%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h6`
  margin-left: 10px;
`
import styled from 'styled-components'
import Reminder from './Reminder'

const DailySpread = ({getReminders, dailyReminders}) => {

  return (
    <Wrapper className='wrapper'>
      <Title>Daily spread</Title>
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
  width: auto;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h6`
  margin-left: 10px;
`
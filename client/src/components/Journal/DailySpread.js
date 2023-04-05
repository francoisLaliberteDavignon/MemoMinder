import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reminder from './Reminder'

const DailySpread = () => {

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
  width: auto;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h6`
  margin-left: 10px;
`
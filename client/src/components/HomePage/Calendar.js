import styled from "styled-components"
import { useState, useEffect } from "react";
import isSameDay from "date-fns/isSameDay";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const Calendrier = ({handleClickDay}) => {

  const [reminders, setNewReminders] = useState([])

  useEffect(() => {
    fetch('/getReminders')
    .then(res => res.json())
    .then((parsedData) => {
      setNewReminders(parsedData.data)
    })
    .catch(error => console.log(error.stack))
  }, [])

  const tileContent = ({date, view}) => {
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (reminders.find(reminder => isSameDay(new Date(reminder.start), date))) {
        return 'styledDate';
      }
    }
  }

  return (
    <Wrapper>
      <Container>
        <Planner 
          onClickDay={(e) => handleClickDay(e)}
          tileContent={tileContent}
          className="calendar"
        />
      </Container>
    </Wrapper>
  )
}

export default Calendrier

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  width: 700px;
  border: 1px solid gray;
  border-radius: 15px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Planner = styled(Calendar)`
width: 450px !important; 
height: 450px !important; 

  .styledDate {
    color:blue;
  }

  button {
    color: brown;

  }
`
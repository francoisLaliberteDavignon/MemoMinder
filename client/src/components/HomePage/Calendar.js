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

  const tileClassName = ({ date }) => {

    let sum = 0;
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);

    const findReminder = reminders.forEach(reminder => {
        if (isSameDay(new Date(reminder.start), newDate)) {
          sum+=1;
        }
      })
    if (sum === 0) {
      return '';
    } else if (sum >= 1 && sum <= 3) {
      return 'slowDay';
    } else if (sum >= 4 && sum <= 7) {
      return 'busyDay';
    } else if (sum >= 8 && sum <= 12) {
      return 'crazyDay';
    }
  }

  return (
    <Wrapper>
      <Container>
        <Planner 
          onClickDay={(e) => handleClickDay(e)}
          tileClassName={tileClassName}
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
`
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Planner = styled(Calendar)`
  width: 550px !important; 
  height: 550px !important; 

.slowDay {
  position: relative;
}

.react-calendar__month-view__weekdays {
  padding-top: 25px
}

.react-calendar__month-view__days {
  text-decoration: none !important;
  padding-top: 25px
}
button.react-calendar__tile {
  padding: 25px
}

div.react-calendar__month-view__weekdays__weekday > abbr {
  text-decoration: none !important;
  font-family: var(--font-heading);
}

button.react-calendar__tile > abbr {
  font-family: var(--font-heading);

}

button.react-calendar__tile--now {
  background-color: var(--color-pink);
  &:hover{
    background-color: var(--color-sand);

  }
}

.slowDay::after {
  content: '';
  position: absolute;
  border: 1px solid var(--color-green);
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background-color: var(--color-orange);
  border-radius: 50%;
}
.busyDay {
  position: relative;
}
.busyDay::after {
  content: '';
  position: absolute;
  border: 1px solid var(--color-green);
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
}

.crazyDay{
  position: relative;
}
.crazyDay::after {
  content: '';
  position: absolute;
  border: 1px solid var(--color-green);
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}

  button {
    color: brown;

  }
`
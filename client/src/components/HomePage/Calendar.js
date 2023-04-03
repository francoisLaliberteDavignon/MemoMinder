import styled from "styled-components"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'


const Calendrier = ({handleClickDay}) => {

  const locales = {
    'en-US': enUS,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })
  
  const events = [{

  }]

  return (
    <Wrapper>
      <Container>
      <Calendar
        className="calendar"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
    />
      </Container>
    </Wrapper>
  )
}

export default Calendrier

const Wrapper = styled.div`
/* display: flex;
align-items: center;
  height: 60vh;
  width: 700px;
  border: 1px solid gray;
  border-radius: 15px; */
`
const Container = styled.div`

`
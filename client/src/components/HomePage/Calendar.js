import styled from "styled-components"
import Calendar from "react-calendar"

const Calendrier = ({handleClickDay}) => {

  return (
    <Wrapper>
      <Container>
        <Calendar onClickDay={(e) => handleClickDay(e)}/>
      </Container>
    </Wrapper>
  )
}

export default Calendrier

const Wrapper = styled.div`
display: flex;
align-items: center;
  height: 60vh;
  width: 700px;
  border: 1px solid gray;
  border-radius: 15px;
`
const Container = styled.div`

`
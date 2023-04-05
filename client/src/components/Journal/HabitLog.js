import styled from "styled-components"


const HabitLog = () => {
  return (
    <Wrapper className="wrapper">
      
      <Title>Habits Log</Title>

    </Wrapper>
  )
}

export default HabitLog

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
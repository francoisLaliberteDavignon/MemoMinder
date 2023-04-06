import styled from "styled-components"
import { Link } from "react-router-dom"

import Weather from './Weather'
import HabitLog from "./HabitLog"
import DailySpread from './DailySpread'

const SideLog = ({getReminders, dailyReminders}) => {

  return (
    <Wrapper >
      <Weather/>
      <HabitLog/>
      <DailySpread 
      getReminders={getReminders}
      dailyReminders={dailyReminders}/>
      <NavDiv className="wrapper">
        <NavBack to={'/homepage'} className="navigation">Back to homepage!</NavBack>  
      </NavDiv>
    </Wrapper>
  )
}

export default SideLog

const Wrapper = styled.div`

  height: 640px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NavBack = styled(Link)`
  width: 100px;
  z-index: 5;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`

const NavDiv = styled.div`
  
`
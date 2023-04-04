import styled from "styled-components"
import { Link } from "react-router-dom"

import Weather from './Weather'
import HabitLog from "./HabitLog"
import DailySpread from './DailySpread'

const SideLog = () => {

  return (
    <Wrapper>
      <Weather/>
      <HabitLog/>
      <DailySpread/>
      <NavBack to={'/homepage'} className="navigation">Back to homepage!</NavBack>
    </Wrapper>
  )
}

export default SideLog

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  height: 650px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const NavBack = styled(Link)`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`
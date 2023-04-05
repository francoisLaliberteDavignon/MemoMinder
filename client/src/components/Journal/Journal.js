import styled from "styled-components"
import BrainDump from './BrainDump'
import SideLog from "./SideLog"
import DailyEntries from "./DailyEntries"

const Journal = () => {
  return (
    <Wrapper className="wrapper">
      <Left>
        <SideLog/>
      </Left>
      <Right>
        <BrainDump/>
        <DailyEntries/>
      </Right>
    </Wrapper>
  )
}

export default Journal

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 30px;
  height: 650px;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`
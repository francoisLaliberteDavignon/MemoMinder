import styled from "styled-components"
import BrainDump from './BrainDump'
import DailyEntries from "./DailyEntriesjs"
import SideLog from "./SideLog"

const Journal = () => {
  return (
    <Wrapper>
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

`
const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`
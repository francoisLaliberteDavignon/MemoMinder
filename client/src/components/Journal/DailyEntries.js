import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Entry from "./Entry"


const DailyEntries = () => {

  const paramsDate = useParams()

  const [ journalEntries, setJournalEntries] = useState([]) 

  useEffect(() => {
    fetch(`/journalEntries/${paramsDate.date}`)
    .then(res => res.json())
    .then(parsedData => {
      setJournalEntries(parsedData.data)
    })
  },[])

  return (
    <Wrapper className="wrapper">
      <Title>Today's journal</Title>
      {journalEntries.length === 0 ? <>No entry at this date</> :
      <ul>
  {    journalEntries.map((entry) => {
        return <Entry entry={entry} />
      })}
      </ul>}
    </Wrapper>
  )
}

export default DailyEntries


const Wrapper = styled.div`
  width: 600px;
  padding-left: 25px;
  height: 41%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h6`
  padding-top: none;
`
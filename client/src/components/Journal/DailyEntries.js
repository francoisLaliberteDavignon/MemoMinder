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
    <Wrapper>
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
  padding: 25px;
  height: 50%;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
`
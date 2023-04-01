import { useEffect, useState } from "react"
import styled from "styled-components"
import Brainer from "./Brainer"

const BrainDump = () => {

  const [ brainDump, setBrainDump ] = useState([])

  useEffect(() => {
    fetch('/getBrainDump')
    .then(res => res.json())
    .then(parsedData => {
      setBrainDump(parsedData.data)
    })
  }, [])

  return (
    <Wrapper>
    {brainDump.length === 0 ? <>loading</>:  
    <ul>
      {brainDump.map((brainer) => {
        return <Brainer brainer={brainer}/>
      })}
    </ul>}
    </Wrapper>
  )
}

export default BrainDump


const Wrapper = styled.div`
  width: 700px;
  padding: 25px;
  height: 50%;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
`
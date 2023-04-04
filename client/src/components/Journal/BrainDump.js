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
        return <Brainer brainer={brainer} key={brainer._id}/>
      })}
    </ul>}
    </Wrapper>
  )
}

export default BrainDump


const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: none;
  width: 600px;
  padding: 25px;
  padding-top: 10px;
  height: 50%;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
`
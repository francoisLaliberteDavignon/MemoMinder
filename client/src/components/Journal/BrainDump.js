import { useEffect, useState } from "react"
import styled from "styled-components"

import Brainer from "./Brainer"

const BrainDump = () => {

  const [ brainDump, setBrainDump ] = useState([])

  const getBrainDump = () => {
    fetch('/getBrainDump')
    .then(res => res.json())
    .then(parsedData => {
      setBrainDump(parsedData.data)
    })
  }
  
  useEffect(() => {
    getBrainDump();
  }, [])

  return (
    <Wrapper className="wrapper">
    {brainDump.length === 0 ? <>loading</>:  
    <ul>
      {brainDump.map((brainer) => {
        return <Brainer 
          brainer={brainer} 
          key={brainer._id}
          getBrainDump={getBrainDump}  
        />
      })}
    </ul>}
    </Wrapper>
  )
}

export default BrainDump


const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 600px;
  padding: 25px;
  padding-top: 0px;
  height: 50%;
  display: flex;
`
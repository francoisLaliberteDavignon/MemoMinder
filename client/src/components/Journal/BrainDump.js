import { useEffect, useState } from "react"
import styled from "styled-components"

import Brainer from "./Brainer"

const BrainDump = ({getReminders}) => {

  const [ brainDump, setBrainDump ] = useState([])
  const [ isBeingScheduled, setIsBeingScheduled ] = useState(null)

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
      <Title>Brain dump</Title>
      {brainDump.length === 0 ? <>loading</>:
      <ul>
        {brainDump.map((brainer, index) => {

            if (isBeingScheduled === index || isBeingScheduled === null) {
            return (
              <Brainer 
              getReminders={getReminders}
              brainer={brainer} 
              key={brainer._id}
              getBrainDump={getBrainDump}
              isBeingScheduled={isBeingScheduled} 
              setIsBeingScheduled ={setIsBeingScheduled}
              index={index}
            />
            )
          } else {
            return null
          }
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
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const Title = styled.h6`

`
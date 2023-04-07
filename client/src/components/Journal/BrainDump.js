import { useEffect, useState } from "react"
import styled from "styled-components"

import Brainer from "./Brainer"
import NewBrainer from "../NewStuffPage/NewBrainer"

const BrainDump = ({getReminders}) => {

  const [ brainDump, setBrainDump ] = useState([])
  const [ isBeingScheduled, setIsBeingScheduled ] = useState(null)

  const getBrainDump = () => {
    fetch('/getBrainDump')
    .then(res => res.json())
    .then(parsedData => {
      setBrainDump(parsedData.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    getBrainDump();
  }, [])

  return (
    <Wrapper>
      <Title>BRAIN DUMP</Title>
      {brainDump.length === 0 ? <>loading</>:
      <>
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
      <NewBrainer getBrainDump={getBrainDump}/>
    </>}
  </Wrapper>
  )
}

export default BrainDump


const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width:40vw;
  height: 50vh;  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h6`
    margin-left: 4px;

`
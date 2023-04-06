import styled from "styled-components"
import { FcHighPriority, FcLowPriority } from "react-icons/fc";
import { FiAlertTriangle, FiTriangle } from "react-icons/fi";
import { TbSquareDot, TbCheck } from "react-icons/tb";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"; 

const Brainer = ({
  getReminders,
  brainer, 
  getBrainDump, 
  setIsBeingScheduled, 
  isBeingScheduled, 
  index 
} ) => {

  const [ isImportant, setIsImportant ] = useState(brainer.isImportant)
  const [ isDeleted, setIsDeleted ] = useState(false)
  const [ isHovered, setIsHovered ] = useState(false)

  const [ postData, setPostData ] = useState(null)
  const [ start, setStart ] = useState(new Date())

  const handleImportance = () => {

    fetch('/patchBrainer', {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...brainer
      })
    })
    .then(res => res.json())
    .then((parsedData) => {
      setIsImportant(!isImportant)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleChangeStart = (date) => {
    setStart(date)
    setPostData(values => ({...values, 
      start: date.toISOString().substring(0, 10)
    }))
  }

  const handleScheduling = () => {
    if (isBeingScheduled === null) {
      setIsBeingScheduled(index)
    } else {
      setIsBeingScheduled(null)
    }
  }

  const handleScheduled = () => {
    setIsDeleted(true)

    fetch(`/scheduleBrainer/${brainer._id}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...brainer,
        ...postData
      }),
    })
    .then(res => res.json())
    .then(() => {
      getBrainDump();
      getReminders();
    })
  }

  const handleDelete = () => {
    setIsDeleted(true)

    fetch(`/delete/brainer/${brainer._id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brainer: brainer }),
    })
    .then(res => res.json())
    .then(() => {
      getBrainDump()
      setIsBeingScheduled(null)
    })
    .catch(error => console.log(error))
  }
  
  return (
    <Out className={isDeleted ? "task-deleted" : "" }>
      <Item >
        {isImportant? 
          <FcHighPriority className="icon"/> : 
          <TbSquareDot className="icon"/>}
        <Left className={isHovered ? "title-hovered" : ""}>
          {brainer.task}
        </Left> 
      </Item>
      <ToSchedule>
      {isBeingScheduled === null ? <></> :
      <SendToSchedule>
        <DatePick
          selected={start} 
          onChange={(date) => handleChangeStart(date)}
        />
        <Send 
          onClick={handleScheduled}
          className="icon"
        />
      </SendToSchedule>
      }
      </ToSchedule>
      <Options>
        <Importance className="icon" onClick={handleImportance}/>
        <Schedule 
          className="icon" 
          onClick={handleScheduling}/>
        <div 
          className="icon">
          <Done onClick={handleDelete}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}    
            />  
        </div>
      </Options >
    </Out>
  )
}

export default Brainer

const Out = styled.div`
  border: 1px solid lightgray;
  margin: 10px 0;
  z-index: 1;
  padding: 5px 15px;
  border-radius: 15px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  transition: all 0.75s ease;
  transform: translateX(0);
  &.task-deleted {
    transform: translateX(-300%);
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Left = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const ToSchedule = styled.div`

`

const DatePick = styled(DatePicker)` 

`

const SendToSchedule = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Send = styled(AiOutlineSend)`
  margin-left: 10px;
  &:hover {
    fill: var(--color-green)

  }
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px
`

const Importance = styled(FiAlertTriangle)`
  &:hover{
    color: red;
    fill: red
  }
`

const Schedule = styled(FiTriangle)`
  &:hover{
    color: var(--color-orange);
    fill: var(--color-orange);
  }
`

const Done = styled(TbCheck)`
  &:hover{
    color: var(--color-green);
    background-color: var(--color-border);
  }
`
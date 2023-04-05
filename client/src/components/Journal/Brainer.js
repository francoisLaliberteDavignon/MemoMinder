import styled from "styled-components"
import { FcHighPriority, FcLowPriority } from "react-icons/fc";
import { FiAlertTriangle, FiTriangle } from "react-icons/fi";
import { TbSquareDot, TbCheck } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router";

const Brainer = ({brainer, getBrainDump}) => {

  const navigate = useNavigate()
  const [isImportant, setIsImportant] = useState(brainer.isImportant)
  const [ isDeleted, setIsDeleted ] = useState(false)
  const [ isHovered, setIsHovered ] = useState(false)

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

  const handleNavigate = () => {
    navigate(`/new/reminder/`)
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
    .then(() => getBrainDump())
    .catch(error => console.log(error))
  }

  return (
    <Out>
      <Item className={isDeleted ? "task-deleted" : ""}>
        {isImportant? 
          <FcHighPriority className="icon"/> : 
          <TbSquareDot className="icon"/>}
        <Left className={isHovered ? "title-hovered" : ""}>
          {brainer.task}
        </Left> 
      </Item>
      <Options>
        <Importance className="icon" onClick={handleImportance}/>
        <Schedule className="icon" onClick={handleNavigate}/>
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

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Out = styled.div`
  border: 1px solid lightgray;
  margin: 10px 0;
  padding: 5px 15px;
  border-radius: 15px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  transition: 750ms;
  transform: translateX(0%);
`

const Importance = styled(FiAlertTriangle)`
  &:hover{
    color: red;
  }
`

const Schedule = styled(FiTriangle)`
  &:hover{
    color: teal;
  }
`

const Done = styled(TbCheck)`
  &:hover{
    color: lightgreen;
  }
`
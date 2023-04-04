import styled from "styled-components"
import { FcHighPriority, FcLowPriority } from "react-icons/fc";
import { FiAlertTriangle, FiTriangle } from "react-icons/fi";
import { TbSquareDot, TbCheck } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router";

const Brainer = ({brainer}) => {

  const navigate = useNavigate()
  const [isImportant, setIsImportant] = useState(brainer.isImportant)

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
    navigate(`/new/event/`)
  }

  return (
    <Out>
      <Item >
        {isImportant? 
          <FcHighPriority className="icon"/> : 
          <TbSquareDot className="icon"/>}
        <Left>
          {brainer.task}
        </Left> 
      </Item>
      <Options>
        <Importance className="icon" onClick={handleImportance}/>
        <Schedule className="icon" onClick={handleNavigate}/>
        <Done className="icon"/>
      </Options>
    </Out>
  )
}

export default Brainer

const Item = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 15px 0;
  padding: 15px;
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
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;`

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
import styled from 'styled-components'
import { TbCheck } from "react-icons/tb";
import { useState } from 'react';

const Reminder = ({reminder, getReminders}) => {

  const [ isHovered, setIsHovered ] = useState(false)
  const [ isDeleted, setIsDeleted ] = useState(false)

  const handleClick = () => {
    setIsDeleted(true)

    fetch(`/delete/reminder/${reminder._id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reminder: reminder }),
    })
    .then(res => res.json())
    .then(() => getReminders())
    .catch(error => console.log(error.stack))
  }

  return (
    <Wrapper>
      <Item 
        onClick={handleClick}
        className={isDeleted ? "task-deleted" : ""}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}>
      <div className={isHovered ? "title-hovered" : ""}>
        <p>{reminder.task}</p>
      </div>
      <div>
        {isHovered ? <TbCheck/> : <>X</>}
      </div>
      </Item>
    </Wrapper>
  )
}


export default Reminder

const Item = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 35vw;
  margin-top: 10px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: space-between;
  transition: all 0.75s ease;
  transform: translateX(0);
  &.task-deleted {
    transform: translateX(300%);
  }
`;

const Wrapper = styled.div`
  display: flex;
`

import React from 'react'
import styled from 'styled-components'

const Reminder = ({reminder}) => {
  return (
    <Wrapper>
      <Item>{reminder.title}</Item>
    </Wrapper>
  )
}

export default Reminder

const Item = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 10px 0;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 15px;
`

const Wrapper = styled.div`
  display: flex;
`
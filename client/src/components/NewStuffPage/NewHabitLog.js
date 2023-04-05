import styled from "styled-components"
import { useState, useEffect } from "react"

import NewSidebar from "./NewSidebar"
import NewNavBar from './NewNavBar'

const NewHabitLog = () => {

  const [ postData, setPostData ] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("okay")
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData(values => ({...values, [name]: value}))
  }


  return (
    <Wrapper className="wrapper">
      <NewSidebar/>
      <Right>
        <NewNavBar/>
        <Form onSubmit={(e) => handleSubmit(e)} className='wrapper'>
          <Input name={""} onChange={(e) => handleChange(e)}/>
          <Submit onClick={handleSubmit}>Add to today's journal! </Submit>
        </Form>
      </Right>
    </Wrapper>
  )
}

export default NewHabitLog

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 30px;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  height: 75vh;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.textarea`
  resize: none;
  height: 25vh;
  width: 560px;
  justify-content: flex-start;
  margin: 30px;
`;

const Submit = styled.button`
  width: 360px;
`
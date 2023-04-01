import styled from "styled-components"
import { useState, useEffect } from "react"

import NewSidebar from "./NewSidebar"
import NewNavBar from './NewNavBar'

const NewBrainer = () => {

  const [ postData, setPostData ] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/newBrainer", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...postData
      })
    })
    .then((res) => res.json())
    .then(parsedData => {
      console.log(parsedData)
    })
    .catch((error) => {
      console.log(error)
    });  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData(values => ({...values, [name]: value}))
  }

  return (
    <Wrapper>
      <NewSidebar/>
      <Right>
        <NewNavBar/>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input name={"task"} onChange={(e) => handleChange(e)}/>
          <Submit type="Submit">Add to the BrainDump! </Submit>
        </Form>
      </Right>
    </Wrapper>
  )
}

export default NewBrainer

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
  border: 1px solid lightgray;
  border-radius: 15px;
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
import styled from "styled-components"
import { useState, useEffect } from "react"

import NewSidebar from "./NewSidebar"
import NewNavBar from './NewNavBar'

const NewAffirmation = () => {

  const [ postData, setPostData ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/newAffirmation", {
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
    })
    .catch((error) => {
      console.log(error)
    });
  }

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
        <Form onSubmit={(e) => handleSubmit(e)} className='wrapper'>
          <Input 
            placeholder="This will be shown randomly on your Homepage!"
            name={"affirmation"} 
            onChange={(e) => handleChange(e)}
          />
          <Submit type="Submit">Add to your affirmations</Submit>
        </Form>
      </Right>
    </Wrapper>
  )
}

export default NewAffirmation

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

const Input = styled.input`
  resize: none;
  font-size: 25px;
  height: 60px;
  width: 560px;
  justify-content: flex-start;
  margin: 30px;
`;

const Submit = styled.button`
  width: 360px;
`
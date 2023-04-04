import styled from "styled-components"
import { useState, useEffect } from "react"

import NewSidebar from "./NewSidebar"
import NewNavBar from './NewNavBar'

const NewBrainer = () => {

  const [ postData, setPostData ] = useState()
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isImportant, setIsImportant ] = useState(false)

  const handleChecked = () => {
    setIsImportant(!isImportant)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    fetch("/newBrainer", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isImportant: isImportant,
        ...postData
      })
    })
    .then((res) => res.json())
    .then(parsedData => {
      setIsSubmitting(false);
      setInputValue('');
    })
    .catch((error) => {
      console.log(error)
      setIsSubmitting(false);
    });  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData(values => ({...values, [name]: value}))
    setInputValue(value);
  }
  
  return (
    <Wrapper>
      <NewSidebar/>
      <Right>
        <NewNavBar/>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input 
            name={"task"} 
            onChange={(e) => handleChange(e)}
            placeholder="Add something to your brain dump"   
          />
          <Options>
            <label htmlFor="isImportant">Is this important?</label>
            <CheckBox 
              name="isImportant" 
              type="checkbox"
              onChange={handleChecked}></CheckBox>
          </Options>
          {/* <Options>
            <label htmlFor="location">Where is this happening?</label>
            <CheckBox name="location" type="select"></CheckBox>
          </Options> */}
          <Submit 
            type="Submit"
            disabled={isSubmitting || inputValue.trim() === ''}
            >{isSubmitting ? 'Adding...' : 'Add to today\'s journal!'}
          </Submit>
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

const Options = styled.div`
  padding-bottom: 15px;
`

const CheckBox = styled.input`

`

const Submit = styled.button`
  width: 360px;
`
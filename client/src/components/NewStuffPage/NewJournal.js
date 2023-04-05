import styled from "styled-components"
import { useState, useEffect } from "react"

import NewSidebar from "./NewSidebar"
import NewNavBar from './NewNavBar'

const NewJournal = () => {

  const [ postData, setPostData ] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    fetch("/newJournalEntry", {
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
      setIsSubmitting(false);
      setInputValue('');
    })
    .catch((error) => {
      console.log(error)
      setIsSubmitting(false);
    });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData(values => ({...values, [name]: value}))
    setInputValue(value);
  }


  return (
    <Wrapper className="wrapper">
      <NewSidebar/>
      <Right>
        <NewNavBar/>
        <Form onSubmit={(e) => handleSubmit(e)} className='wrapper'>
          <Input 
            placeholder="Add a new journal entry..." 
            name={"input"} 
            onChange={(e) => handleChange(e)}
            value={inputValue}
          />
          <Submit 
            disabled={isSubmitting || inputValue.trim() === ''} 
            onClick={handleSubmit}
          >{isSubmitting ? 'Adding...' : 'Add to today\'s journal!'}
          </Submit>
        </Form>
      </Right>
    </Wrapper>
  )
}

export default NewJournal

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
  align-items: flex-start;
  margin: 30px;

`;

const Submit = styled.button`
`
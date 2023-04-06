import styled from "styled-components"
import { useState, useEffect } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NewSidebar from "./NewSidebar"
import NewNavBar from './NewNavBar'

const NewReminder = () => {

  const [ postData, setPostData ] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ start, setStart ] = useState(new Date())
  const [ end, setEnd ] = useState(new Date())

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    fetch("/newReminder", {
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
    const task = e.target.task;
    const value = e.target.value;
    setPostData(values => ({
      ...values, 
      [task]: value, 
      start: start.toISOString().substring(0, 10), 
      end: end.toISOString().substring(0, 10)
    }))
    setInputValue(value);
  }

  const handleChangeStart = (date) => {
    setStart(date)
    setPostData(values => ({...values, 
      start: date.toISOString().substring(0, 10)
    }))
  }

  return (
    <Wrapper className="wrapper">
      <NewSidebar/>
      <Right>
        <NewNavBar/>
        <Form className="wrapper">
          <FormContainer>
            <InputField>
              <label htmlFor="task">Title</label>
              <Input 
                name="task"
                onChange={(e) => handleChange(e)}
                value={inputValue}/>
            </InputField>
            <InputField>
              <label htmlFor="start">Start</label>
              <DatePick selected={start} onChange={(date) => handleChangeStart(date)} />
            </InputField>
            <Submit
              onClick={handleSubmit}             
              disabled={isSubmitting || inputValue.trim() === ''} 
            >{isSubmitting ? 'Adding...' : 'Add to calendar!'}
            </Submit>
          </FormContainer>
        </Form>
      </Right>
    </Wrapper>
  )
}

export default NewReminder

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px;
`

const InputField = styled.div`
  display: flex;
  width: 360px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  & > div {
    width: fit-content;
  }
`

const Input = styled.input`
  resize: none;
  justify-content: flex-start;
`;

const Submit = styled.button`
  margin-top: 50px;
  width: 360px;
`

const DatePick = styled(DatePicker)`
  height: 25px;
`
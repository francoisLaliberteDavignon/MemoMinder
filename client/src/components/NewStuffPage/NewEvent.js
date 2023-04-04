import styled from "styled-components"
import { useState, useEffect } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NewSidebar from "./NewSidebar"
import NewNavBar from './NewNavBar'

const NewEvent = () => {

  const [ postData, setPostData ] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ start, setStart ] = useState(new Date())
  const [ end, setEnd ] = useState(new Date())


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    fetch("/newEvent", {
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
      console.log(parsedData.data)
    })
    .catch((error) => {
      console.log(error)
      setIsSubmitting(false);
    });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData(values => ({
      ...values, 
      [name]: value, 
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

  const handleChangeEnd = (date) => {
    setEnd(date)
    setPostData(values => ({...values, 
      end: date.toISOString().substring(0, 10)
    }))
    
  }
  console.log(postData)
  return (
    <Wrapper>
      <NewSidebar/>
      <Right>
        <NewNavBar/>
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Input 
              name="title"
              onChange={(e) => handleChange(e)}
              value={inputValue}
            />
          </div>
          <div>
            <label htmlFor="start">Start</label>
            <DatePicker selected={start} onChange={(date) => handleChangeStart(date)} />
          </div>
          <div>
            <label htmlFor="end">End</label>
            <DatePicker selected={end} onChange={(date) => handleChangeEnd(date)} />
          </div>
          <Submit
            onClick={handleSubmit}             
            disabled={isSubmitting || inputValue.trim() === ''} 
          >{isSubmitting ? 'Adding...' : 'Add to calendar!'}</Submit>
        </Form>
      </Right>
    </Wrapper>
  )
}

export default NewEvent

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

const Input = styled.input`
  resize: none;
  justify-content: flex-start;
  margin: 30px;
`;

const Submit = styled.button`
  width: 360px;
`
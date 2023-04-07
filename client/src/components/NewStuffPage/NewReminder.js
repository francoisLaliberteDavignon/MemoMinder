import styled from "styled-components"
import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerButton from "./DatePickerButton";
import { min } from "date-fns";

const NewReminder = ({getReminders}) => {

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
      getReminders();
    })
    .catch((error) => {
      console.log(error)
      setIsSubmitting(false);
    });
  }

  const handleChange = (e) => {
    const task = e.target.name;
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
      <Form>
        <InputField>
          <Input 
            name="task"
            placeholder="What will you forget...?"
            onChange={(e) => handleChange(e)}
            value={inputValue}/>
          <DatePickerWrapper>
            <DatePick
              customInput={<DatePickerButton />}
              placeholderText="What will you forget...?"
              selected={start}
              onChange={(date) => handleChangeStart(date)}
              placeholder="When to remember?"
              value={start}
            />
          </DatePickerWrapper>
        </InputField>
        <Submit
          onClick={handleSubmit}             
          disabled={isSubmitting || inputValue.trim() === ''} 
        >{isSubmitting ? 'Adding...' : 'Add to calendar'}
        </Submit>
      </Form>
  )
}

export default NewReminder

const Form = styled.form`
  margin-top: 10px;
  font-size: 15px;
  display:flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 35vw;
  height: 10vh;
  margin-top: 10px;
  padding: 5px 15px;
`

const Input = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  min-height: 50px;
  overflow-y: hidden;
  font-size: 15px;
  line-height: 20px;
  height: auto;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DatePickerWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
`

const DatePick = styled(DatePicker)`
  height: 25px;
  border: none;
`

const Submit = styled.button`
  margin-top: 50px;
`
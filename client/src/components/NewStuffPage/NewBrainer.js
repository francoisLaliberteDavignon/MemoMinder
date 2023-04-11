import styled from "styled-components"
import { useState } from "react"

const NewBrainer = ({getBrainDump}) => {

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
      getBrainDump();
    })
    .catch((error) => {
      console.log(error.stack)
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
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputField>
      <Input 
        name={"task"} 
        onChange={(e) => handleChange(e)}
        placeholder="Add something to your brain dump"
        value={inputValue}   
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
      </InputField>
      <Submit 
        type="Submit"
        disabled={isSubmitting || inputValue.trim() === ''}
        >{isSubmitting ? 'Adding...' : 'Add to today\'s journal!'}
      </Submit>
    </Form>
  )
}

export default NewBrainer


const Form = styled.form`
  margin-top: 10px;
  font-size: 15px;
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 4px;

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

const Options = styled.div`
  display: flex;
  align-items: flex-end;
`

const CheckBox = styled.input``

const Submit = styled.button`
  margin-top: 50px;
`
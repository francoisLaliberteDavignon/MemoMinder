import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Entry from "./Entry"


const DailyEntries = () => {

  const paramsDate = useParams()

  const [ journalEntries, setJournalEntries] = useState([]) 

  const [ postData, setPostData ] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    reFetchJournal();
  },[])

  const reFetchJournal = () => {
    fetch(`/journalEntries/${paramsDate.date}`)
    .then(res => res.json())
    .then(parsedData => {
      setJournalEntries(parsedData.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

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
      reFetchJournal();
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
    <Wrapper>
      <Title>Journal log</Title>
      {journalEntries.length === 0 ? <>No entry at this date</> :
      <ul>
  {    journalEntries.map((entry) => {
        return <Entry entry={entry} key={entry._id} />
      })}
      </ul>}
      <Form onSubmit={(e) => handleSubmit(e)}>
          <Input 
            placeholder="Add a new journal entry..." 
            name={"input"} 
            onChange={(e) => handleChange(e)}
            value={inputValue}/>
          <Right>
            <Submit 
              disabled={isSubmitting || inputValue.trim() === ''} 
              onClick={handleSubmit}
            >{isSubmitting ? 'Adding...' : 'Add to journal'}
            </Submit>
          </Right>
        </Form>
    </Wrapper>
  )
}

export default DailyEntries


const Wrapper = styled.div`
  width: 40%;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
`

const Title = styled.h6`
  padding-top: none;
  margin-bottom: 15px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  resize: none;
  margin: 30px 0;
  width: 35vw;
`;  

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Submit = styled.button`
  width: 13vw;
`
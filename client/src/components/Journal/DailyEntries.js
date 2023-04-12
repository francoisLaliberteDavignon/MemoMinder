import { useEffect, useState } from "react"
import styled from "styled-components"
import PulseLoader from 'react-spinners/PulseLoader'

import Entry from "./Entry"

const DailyEntries = ({date}) => {

  const [ journalEntries, setJournalEntries] = useState([]) 

  const [ postData, setPostData ] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // This manages the journal entries for every date that is picked in the calendar.

  useEffect(() => {
    reFetchJournal();
  },[])

  const reFetchJournal = () => {
    fetch(`/journalEntries/${date}`)
    .then(res => res.json())
    .then(parsedData => {
      setJournalEntries(parsedData.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // This manages the POSTing of a new journal log. 

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
        date: date,
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
      {journalEntries.length === 0 ? <Loading><PulseLoader size={5}/></Loading> :
      <ul>
      {journalEntries.map((entry) => {
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

const Loading = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  min-height: 75px;
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
  width: 17vw;
`
import { useEffect, useState } from "react";
import styled from "styled-components";

const NewEntry = () => {

  const [newEntry, setNewEntry] = useState(null)

  useEffect(() => {
      fetch("/newEntry", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newEntry
      })
    })
    .then((parsedData) => { 
      console.log(parsedData) 
    }).catch((error) => {
      console.log(error)
    });
  }, [newEntry])

  const handleSubmit = () => {

  }

  return (
    <Wrapper>
      <div>NewEntry</div>
      <form onSubmit={handleSubmit}>
        <input>
        </input>
      </form>
    </Wrapper>
  )
}

export default NewEntry

const Wrapper = styled.div`
  
`
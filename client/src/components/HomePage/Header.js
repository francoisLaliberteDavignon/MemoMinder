import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'date-fns'


const Header = ({paramsToday}) => {

  const [ affirmations, setAffirmations ] = useState(null)
  const [randomAffirmation, setRandomAffirmation] = useState(null)

  useEffect(() => {
    fetch('/affirmations')
    .then(res => res.json())
    .then(parsedData => {
      setAffirmations(parsedData.data)
      setRandomAffirmation(parsedData.data[Math.floor(Math.random() * parsedData.data.length)])
    })
  }, [])

  return (

    <Wrapper to={`/journal/${paramsToday}`}>
      <p>View today's journal</p>
      <p>{paramsToday}</p>
      {!randomAffirmation ? <p>fetching an affirmation</p> :
      <p>{randomAffirmation.affirmation}</p>}
    </Wrapper>
  )
}

export default Header

const Wrapper = styled(Link)`
  height: 190px;
  width: 625px;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 150ms;
  &:hover{
    background-color: lightseagreen;
    color: white;
    /* transform: scale(0.9); */
  }
`
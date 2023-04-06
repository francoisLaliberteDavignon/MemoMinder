import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

    <Wrapper className='wrapper'>
      <Today className='navigation' to={`/journal/${paramsToday}`}>
        <p>{paramsToday}</p>
        <>View today's journal</>
      </Today>
      {!randomAffirmation ? <p>fetching an affirmation</p> :
      <h4>{randomAffirmation.affirmation}</h4>}
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  height: 190px;
  width: 637px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 150ms;
`

const Today = styled(Link)`

`
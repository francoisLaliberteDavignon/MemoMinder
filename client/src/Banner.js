import styled from "styled-components"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Weather from "./components/Journal/Weather"

const Banner = ({today, paramsToday}) => {

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
    <Wrapper>
      <Weather/>
      <Today className='navigation' to={`/dailyview/${paramsToday}`}>
        <p>{paramsToday}</p>
        <p>View today's journal</p>
      </Today>
      {!randomAffirmation ? <Affirmation></Affirmation> :
      <Affirmation>{randomAffirmation.affirmation}</Affirmation>}
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.div`
  background-color: var(--color-green);
  height: 20%;
  width: 100vw;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
`

const Affirmation = styled.h5`
  max-width: 350px
`

const Today = styled(Link)`
  height: 65%;
  margin-left: 15px;
`
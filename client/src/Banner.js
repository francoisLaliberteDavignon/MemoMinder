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
      <Today >
        {/* <p>{paramsToday}</p> */}
      </Today>
      {!randomAffirmation ? <Affirmation></Affirmation> :
      <Affirmation>{randomAffirmation.affirmation}</Affirmation>}
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.div`
  background-color: var(--color-green);
  height: 15vh;
  max-height: 15vh;
  width: 100%;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
`

const Affirmation = styled.h5`
  max-width: 350px;
`

const Today = styled.div`
  position: relative;
  height: 65%;
  margin-left: 15px;
`
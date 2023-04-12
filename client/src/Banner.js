import styled from "styled-components"
import { useState, useEffect } from "react"
import Weather from "./components/Journal/Weather"

const Banner = () => {

  const [randomAffirmation, setRandomAffirmation] = useState(null)

  // This fetches a random afffirmation that is displayed in the header every times it renders

  useEffect(() => {
    fetch('/affirmations')
    .then(res => res.json())
    .then(parsedData => {
      setRandomAffirmation(parsedData.data[Math.floor(Math.random() * parsedData.data.length)])
    })
  }, [])

  return (
    <Wrapper>
      <Weather/>
      {!randomAffirmation ? <Affirmation></Affirmation> :
      <Affirmation>{randomAffirmation.affirmation}</Affirmation>}
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.div`
  background-color: var(--color-green);
  height: 14vh;
  max-height: 14vh;
  width: 100%;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
`

const Affirmation = styled.h5`
  max-width: 350px;
`

import styled from "styled-components"
import { useEffect, useState } from "react";

const Weather = () => {

const location = {lat: 45.50884, lon:-73.58781}
const { WEATHERBIT_KEY } = process.env;
const [weather, setWeather] = useState()

  useEffect(() => {
    fetch(`https://api.weatherbit.io/v2.0/current?lat=${location.lat}&lon=${location.lon}&key=9d083f17860b4ca29f63d032db8ab919&include=minutely`)
    .then(res => res.json())
    .then ((parsedData) => {
      setWeather(parsedData.data[0])
    }).catch ((error) => console.log(error))
  }, [])
  

  return (
    <Wrapper>
      {!weather? <Title>Weather</Title> :
      <>
        <Title>{weather.city_name}'s weather</Title>
        <Top>
          <img src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}/>
          <Description>
            <Temp>{weather.temp} °C</Temp>
            <p>{weather.weather.description}</p>
          </Description>
        </Top>
      </>
      }
    </Wrapper>
  )
}

export default Weather

const Wrapper = styled.div`
  width: auto;
  height: 125px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h6`
`

const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const Top = styled.div`
  display:flex;
  flex-direction: row;
`

const Temp = styled.h4`
  padding: 10px;
  display: flex;
  text-align: flex-start;
  padding-bottom: 0;
`
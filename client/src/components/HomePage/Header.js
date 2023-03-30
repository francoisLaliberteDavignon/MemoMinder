import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'date-fns'


const Header = ({paramsToday}) => {

  return (
    <Wrapper to={`/journal/${paramsToday}`}>
      <p>{paramsToday}</p>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled(Link)`
  height: 190px;
  width: 625px;
  border: 1px solid gray;
  border-radius: 15px;
`
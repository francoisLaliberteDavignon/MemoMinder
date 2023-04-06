import styled from "styled-components"

const Entry = ({entry}) => {
  return (
    <Item key={entry._id}>{entry.input}</Item>
  )
}

export default Entry

const Item = styled.p`
`

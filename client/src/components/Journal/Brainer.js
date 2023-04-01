import styled from "styled-components"

const Brainer = ({brainer}) => {
  return (
    <Item key={brainer._id} >
      {brainer.task}
    </Item>
  )
}

export default Brainer

const Item = styled.div`
  border: 1px solid lightgray;
  margin: 15px 0;
`
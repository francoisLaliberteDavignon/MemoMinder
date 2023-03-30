import styled from "styled-components"
import { Link } from "react-router-dom"

const Sidebar = () => {

  return (
    <Wrapper>
      Sidebar
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  height: 60vh;
  width: 150px;
  display: flex;
  justify-content: center;
`
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SlSocialFacebook, SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl'
import { TbBrandGmail } from 'react-icons/tb'

const Footer = () => {
  return (
    <Wrapper>
      <Social>
        <Fb to={'https://www.facebook.com/'}><SlSocialFacebook className="footIcon"/> </Fb>
        <Gh to={'https://github.com/'}><SlSocialGithub className="footIcon"/></Gh>
        <Gg to={'https://mail.google.com/'}><TbBrandGmail className="footIcon"/></Gg>
        <Li to={'https://www.linkedin.com/'}><SlSocialLinkedin className="footIcon"/></Li>
      </Social>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  height: 9.5vh;
  max-height: 10vh;
  padding: 0 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Social = styled.div`
  display: flex;
  padding-top: 4vh;
`

const Fb = styled(Link)``
const Gh = styled(Link)``
const Gg = styled(Link)``
const Li = styled(Link)``
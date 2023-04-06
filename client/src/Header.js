import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { UserContext } from '../src/UserContext';
import { Link } from 'react-router-dom';
import { GiFeather } from 'react-icons/gi'
import { TbScribble } from 'react-icons/tb'

const Header = () => {

  const { user, logout } = useAuth0();
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const [ isHovered, setIsHovered ] = useState(false)
    
  useEffect(() => {
    if (!currentUser && user) {
      fetch("/newUser", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...user
      })
    })
    .then((res) => res.json())
    .then((parsedData) => {
      setCurrentUser(parsedData.data)
      sessionStorage.setItem("user", JSON.stringify(user))
    }).catch((error) => {
      console.log(error)
    });
    }
  }, [currentUser, user])

  const handleLogOut = () => {
    sessionStorage.clear();
    logout({logoutParams : {returnTo: window.location.origin}})
  }

  return (
    <NavBar>
      <Wrapper>
        <Nav to={'/homepage'} >
          <Logo >Logo here!</Logo>
          <Scribble/>
        </Nav>
        <Nav to={'/new/journalEntry'} className="navigation">New journal log</Nav>
        <Nav to={'/new/brainer'} className="navigation">New brainer</Nav>
        <Nav to={'/new/reminder'} className="navigation">New reminder</Nav>
        <Nav to={'/new/affirmation'} className="navigation">New affirmation</Nav>
        <Nav to={'/new/habitLog'} className="navigation">New habit log</Nav>
      </Wrapper>
      {!currentUser ? <Greeting>Loading</Greeting> :
      <Greeting          
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} >
        {/* <p>{currentUser.nickname}</p> */}
        {isHovered ? <Logout onClick={() => handleLogOut()}>Logout</Logout> : <></>}
        <ProfilePic 
          src={currentUser.picture}
          /> 
      </Greeting>
      }
    </NavBar>
  )
}

export default Header

const NavBar = styled.div`
  background-color: var(--color-pink);
  height: 10%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`
const Wrapper = styled.div`
  border-left: 10px solid var(--color-gray);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

const Logo = styled(GiFeather)`
  height: 50px;
  width: 50px;
  transform: rotate(-25deg);
`

const Scribble = styled(TbScribble)`
  position: relative;
  height: 15px;
  width: 25px;
  left: -40px;
  top: 15px;
` 

const Nav = styled(Link)`
  margin-left: 15px;
`

const Greeting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
`
const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;


`

const Logout = styled.button`
  transition: 750ms;
`
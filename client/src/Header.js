import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import { UserContext } from '../src/UserContext';

import { GiFeather } from 'react-icons/gi'
import { TbScribble } from 'react-icons/tb'

import ClockLoader from "react-spinners/ClockLoader";

const Header = () => {

  const { user, logout } = useAuth0();
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const [ isHovered, setIsHovered ] = useState(false)
  const [ isShowingNewAff, setIsShowingNewAff ] = useState(false)
  const [ postData, setPostData ] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Everything around the "new affirmation" button
  
  const handleShowInput = () => {
    setIsShowingNewAff(!isShowingNewAff)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    fetch("/newAffirmation", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...postData
      })
    })
    .then((res) => res.json())
    .then(parsedData => {
      setIsSubmitting(false);
      setInputValue('');
      setIsShowingNewAff(false)
    })
    .catch((error) => {
      console.log(error)
      setIsSubmitting(false);
    });
  }

  const handleChange = (e) => {
    const affirmation = e.target.name;
    const value = e.target.value;
    setPostData(values => ({
      ...values, 
      [affirmation]: value, 
    }))
    setInputValue(value);
  }

  // Sets the user in session storage with the the user state provided by userContext

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
        <Logo />
        <Scribble/>
        <Nav to={'/homepage'} className="navigation">Homepage</Nav>
        <NewAff 
          className="navigation"
          onClick={handleShowInput}
          isBeingShown={isShowingNewAff}
        >New affirmation</NewAff>
        <AffInputForm
          isBeingShown={isShowingNewAff}>
          <Submit 
            onClick={handleSubmit} 
            disabled={isSubmitting || inputValue.trim() === ''} 
          >{isSubmitting ? 'Adding...' : 'Add an affirmation'}
          </Submit>
          <AffInput 
            name="affirmation"
            placeholder='Enter new affirmation'
            onChange={(e) => handleChange(e)}
            value={inputValue}/>
        </AffInputForm>
      </Wrapper>
      {!currentUser ? <Greeting> <ClockLoader/> </Greeting> :
      <Greeting          
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} >
        {/* <p>{currentUser.nickname}</p> */}
        <Logout 
          hover={isHovered} 
          onClick={() => handleLogOut()}
        >Logout</Logout>
        <ProfilePic 
          src={currentUser.picture}
          /> 
      </Greeting>}
    </NavBar>
  )
}

export default Header

const NavBar = styled.div`
  background-color: var(--color-pink);
  height: 10vh;
  max-height: 10vh;
  padding: 0 15px;
  width: 100%;
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
  max-height: 60px;
  margin-right: 15px;
`

const NewAff = styled.div`
  margin-right: 15px;
`

const AffInputForm = styled.form`
  opacity : ${(props) => props.isBeingShown ? "1" : "0"};
  transition: 0.3s;
`

const AffInput = styled.input`
  border: none;
  background-color: var(--color-pink);
  width: 250px;
  font-weight: bold;
`

const Submit = styled.button`
  margin-right: 15px;
  height: 42px;
  width: 193px;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    background-color: var(--color-green);
  }
`

const Greeting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
`
const ProfilePic = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
`

const Logout = styled.button`
  border: none;
  background-color: var(--color-green);
  margin-right: 15px;
  transition: 0.45s ease-in-out;
  opacity : ${(props) => props.hover ? "1" : "0"};

`
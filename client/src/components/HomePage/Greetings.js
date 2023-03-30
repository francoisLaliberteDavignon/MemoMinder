import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components'
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Greetings = () => {
  const { user, logout } = useAuth0();

  const { currentUser, setCurrentUser } = useContext(UserContext)
  
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
    <>
      {!currentUser ? <Greeting>Loading</Greeting> :
      <Greeting>
        <p>Homepage</p>
        <p>{currentUser.nickname}</p>
        <ProfilePic src={currentUser.picture}/> 
        <button onClick={() => handleLogOut()}>Logout</button>
      </Greeting>
      }
    </>
  )
}

const Greeting = styled.div`
  height: 190px;
  width: 225px;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const ProfilePic = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

export default Greetings
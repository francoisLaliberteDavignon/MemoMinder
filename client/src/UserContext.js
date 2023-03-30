import { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
  
  const { user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState(() => {
    const storageUser = sessionStorage.getItem("user")
    return storageUser ? JSON.parse(storageUser) : null
  })

  // useEffect(() => {
  //   if (user && isAuthenticated) {
  //     sessionStorage.setItem("user", JSON.stringify(user))
  //     setCurrentUser(user)
  //   } else {
  //     setCurrentUser(null)
  //   }
  // }, [user])

  // useEffect(() => {
  //   if (sessionStorage.getItem("user")) {
  //     setCurrentUser(JSON.parse(sessionStorage.getItem("user")))
  //   }
  // }, [user])

  return (
  <UserContext.Provider
    value={{currentUser, setCurrentUser}}>
      {children}
  </UserContext.Provider>
  )
}
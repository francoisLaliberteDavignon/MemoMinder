import { createContext, useState } from "react";

export const DateContext = createContext(null)

export const DateProvider = ({children}) => {
  
  const [ today, setToday ] = useState(new Date(Date.now()))

  let paramsToday = today.toISOString().substring(0, 10)

  return (
  <DateContext.Provider
    value={{today, paramsToday, setToday}}>
      {children}
  </DateContext.Provider>
  )
}
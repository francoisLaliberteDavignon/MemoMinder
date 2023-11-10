import { createContext, useState } from "react";

export const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
  const [today, setToday] = useState(new Date(Date.now()));
  const [date, setDate] = useState(null);

  let paramsToday = today.toISOString().substring(0, 10);

  return (
    <DateContext.Provider
      value={{ today, paramsToday, setToday, date, setDate }}
    >
      {children}
    </DateContext.Provider>
  );
};

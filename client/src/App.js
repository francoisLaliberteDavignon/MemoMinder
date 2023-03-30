import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Login from "./Login";
import Homepage from './components/HomePage/Homepage'
import Journal from "./components/Journal/Journal";

const App = () => {

  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/journal/:date' element={<Journal/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

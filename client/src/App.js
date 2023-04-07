import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Login from "./Login";
import Homepage from './components/HomePage/Homepage'
import DailyView from "./components/Journal/DailyView";

const App = () => {

  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path={`/homepage`} element={<Homepage/>}/>
        <Route path='/dailyview/:date' element={<DailyView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

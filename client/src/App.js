import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Login from "./Login";
import Homepage from './components/HomePage/Homepage'
import Journal from "./components/Journal/Journal";

import NewJournal from "./components/NewStuffPage/NewJournal";
import NewBrainer from "./components/NewStuffPage/NewBrainer";
import NewEvent from "./components/NewStuffPage/NewEvent";
import NewAffirmation from "./components/NewStuffPage/NewAffirmation";
import NewHabitLog from "./components/NewStuffPage/NewHabitLog";

const App = () => {

  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/journal/:date' element={<Journal/>}/>

        <Route path='/new/journalEntry' element={<NewJournal/>}/>
        <Route path='/new/brainer' element={<NewBrainer/>}/>
        <Route path='/new/event' element={<NewEvent/>}/>
        <Route path='/new/affirmation' element={<NewAffirmation/>}/>
        <Route path='/new/habitLog' element={<NewHabitLog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

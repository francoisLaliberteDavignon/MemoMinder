import { useContext, useState, useEffect } from "react";
import { DateContext } from "../../DateContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { constants } from "../../constants";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";

import Calendrier from "./Calendar";
import DailySpread from "./DailySpread";
import BrainDump from "../Journal/BrainDump";

const Homepage = () => {
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState("reminders");
  const { paramsToday, setDate } = useContext(DateContext);
  const [dailyReminders, setDailyReminders] = useState(null);

  // Here we fetch the reminders to be shown as the default view, and uses Today's
  // formatted date to do so.

  useEffect(() => {
    setDate(paramsToday);
    getReminders();
  }, []);

  const getReminders = () => {
    fetch(`/getReminders/${paramsToday}`)
      .then((res) => res.json())
      .then((parsedData) => {
        setDailyReminders(parsedData.data);
      })
      .catch((error) => console.log(error.stack));
  };

  // This is the section that makes the calendar actually navigates to the dailyView
  // of whatever date is being clicked. Also sets "paramsDate" as context-available

  let paramsDate;

  const handleClickDay = (e) => {
    console.log(e);
    paramsDate = e.toISOString().substring(0, 10);
    if (paramsDate !== paramsToday) {
      setDate(paramsDate);
      console.log(paramsDate);
    } else {
      setDate(paramsToday);
    }
    navigate(`/dailyview/${paramsDate}`);
  };

  // This uses class to toggle back and forth between the two components, and also
  // calls the function that fetches the reminders

  const handleIsActive = (button) => {
    setActiveButton(button);
    getReminders();
  };

  return (
    <Wrapper>
      <Header />
      <Banner paramsToday={paramsToday} />
      <Main className="wrapper">
        <Calendrier className="calendar" handleClickDay={handleClickDay} />
        <Left className="after_media_query">
          <NavDiv>
            <NavButton
              onClick={() => handleIsActive("reminders")}
              className={activeButton === "reminders" ? "active" : ""}
            >
              Today's reminders
            </NavButton>
            <NavButton
              onClick={() => handleIsActive("braindump")}
              className={activeButton === "braindump" ? "active" : ""}
            >
              Brain dump
            </NavButton>
          </NavDiv>
          {activeButton === "reminders" && (
            <DailySpread
              dailyReminders={dailyReminders}
              getReminders={getReminders}
            />
          )}
          {activeButton === "braindump" && (
            <BrainDump getReminders={getReminders} />
          )}
        </Left>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.div`
  height: 65dvh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex: 1 0 auto;
`;

const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const NavDiv = styled.div`
  display: flex;
  padding-right: ${constants.DEFAULT_FRAME_PADDING};
  justify-content: space-evenly;
  margin-top: 12px;
  margin-bottom: 48px;
`;

const NavButton = styled.button`
  background: none;
  width: 256px;
  font-weight: bold;
  border-radius: 0;
  border: 4px solid transparent;
  &:hover {
    border-bottom: 4px solid black;
  }
  &.active {
    border-bottom: 4px solid black;
    border-radius: none;
  }
`;

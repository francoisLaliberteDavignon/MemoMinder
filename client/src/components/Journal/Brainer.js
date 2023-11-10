import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { TbCheck } from "react-icons/tb";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import DatePicker from "react-datepicker";
import DatePickerButton from "../NewStuffPage/DatePickerButton";

import "react-datepicker/dist/react-datepicker.css";

const Brainer = ({
  getReminders,
  brainer,
  getBrainDump,
  setIsBeingScheduled,
  isBeingScheduled,
  index,
}) => {
  const [isImportant, setIsImportant] = useState(brainer.isImportant);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [postData, setPostData] = useState(null);
  const [start, setStart] = useState(new Date());

  // This is the function that handles setting an existing brainer to "important".

  const handleImportance = () => {
    fetch("/patchBrainer", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...brainer,
      }),
    })
      .then((res) => res.json())
      .then((parsedData) => {
        setIsImportant(!isImportant);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // These are the functions that handles picking a date to shedule a brainer, and
  // send it to the "reminders" collection.

  const handleChangeStart = (date) => {
    setStart(date);
    setPostData((values) => ({
      ...values,
      start: date.toISOString().substring(0, 10),
    }));
  };

  const handleScheduling = () => {
    if (isBeingScheduled === null) {
      setIsBeingScheduled(index);
    } else {
      setIsBeingScheduled(null);
    }
  };

  const handleScheduled = () => {
    setIsDeleted(true);

    fetch(`/scheduleBrainer/${brainer._id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...brainer,
        ...postData,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        getBrainDump();
        getReminders();
        setIsBeingScheduled(null);
      });
  };

  // This is the function that handles the actions that happen when a brainer is completed.

  const handleDelete = () => {
    setIsDeleted(true);

    fetch(`/delete/brainer/${brainer._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brainer: brainer }),
    })
      .then((res) => res.json())
      .then(() => {
        getBrainDump();
        setIsBeingScheduled(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Out
      className={
        isDeleted ? "task-deleted" : "" || isImportant ? "isImportant" : ""
      }
    >
      <Item className={isHovered ? "title-hovered" : ""}>
        <p>{brainer.task}</p>
      </Item>
      <ToSchedule></ToSchedule>
      <Options>
        {isBeingScheduled === null ? (
          <></>
        ) : (
          <>
            <DatePick
              customInput={<DatePickerButton />}
              selected={start}
              onChange={(date) => handleChangeStart(date)}
            />
            <Send onClick={handleScheduled} className="icon" />
          </>
        )}
        <Importance
          onClick={handleImportance}
          className={isImportant ? "icon isImportant" : "icon"}
        />
        <Schedule className="icon" onClick={handleScheduling} />
        <DoneIcon className="icon">
          <Done
            onClick={handleDelete}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </DoneIcon>
      </Options>
    </Out>
  );
};

export default Brainer;

const Out = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 35vw;
  margin-top: 10px;
  padding: 5px 15px;
  margin-left: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.75s ease;
  transform: translateX(0);
  &.task-deleted {
    transform: translateX(300%);
  }
  &.isImportant {
    outline: 3px solid pink;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ToSchedule = styled.div``;

const DatePick = styled(DatePicker)``;

const Send = styled(AiOutlineSend)`
  margin-left: 10px;
  &:hover {
    fill: var(--color-green);
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Importance = styled(FiAlertTriangle)`
  &:hover {
    color: black;
    fill: red;
  }
  &.isImportant {
    color: black;
    fill: var(--color-pink);
  }
`;

const Schedule = styled(BsClock)`
  &:hover {
    color: black;
    background-color: var(--color-orange);
    border-radius: 50%;
  }
`;

const DoneIcon = styled.div`
  margin-top: 7px;
`;

const Done = styled(TbCheck)`
  &:hover {
    color: var(--color-green);
    background-color: var(--color-border);
  }
`;

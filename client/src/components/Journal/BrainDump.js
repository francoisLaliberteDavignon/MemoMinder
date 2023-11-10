import { useEffect, useState } from "react";
import styled from "styled-components";
import ClockLoader from "react-spinners/ClockLoader";

import Brainer from "./Brainer";
import NewBrainer from "../NewStuffPage/NewBrainer";

const BrainDump = ({ getReminders }) => {
  const [brainDump, setBrainDump] = useState([]);
  const [isBeingScheduled, setIsBeingScheduled] = useState(null);

  // This fetches all the brainers from the database and sets it in state variable.
  // Brain Dump is pretty simple as it is always the same whatever the date.

  const getBrainDump = () => {
    fetch("/getBrainDump")
      .then((res) => res.json())
      .then((parsedData) => {
        setBrainDump(parsedData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBrainDump();
  }, []);

  // The Brainer is the actual individual component rendered depending on the
  // state variable "braindump". Also, here is rendered the component that manages
  // adding a new element to the brainDump.

  return (
    <Wrapper>
      <Title>BRAIN DUMP</Title>
      {brainDump.length === 0 ? (
        <Loading>
          <ClockLoader />
        </Loading>
      ) : (
        <>
          {brainDump.map((brainer, index) => {
            if (isBeingScheduled === index || isBeingScheduled === null) {
              return (
                <Brainer
                  getReminders={getReminders}
                  brainer={brainer}
                  key={brainer._id}
                  getBrainDump={getBrainDump}
                  isBeingScheduled={isBeingScheduled}
                  setIsBeingScheduled={setIsBeingScheduled}
                  index={index}
                />
              );
            } else {
              return null;
            }
          })}
        </>
      )}
      <NewBrainer getBrainDump={getBrainDump} />
    </Wrapper>
  );
};

export default BrainDump;

const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 40vw;
  height: 53vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h6`
  margin-left: 4px;
  margin-top: 0;
`;

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

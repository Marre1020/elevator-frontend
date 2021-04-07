import React, { CSSProperties } from "react";
import axios from "axios";
import LiftInterface from "../../components/Lift";
import { getElevatorFloors } from "./getElevatorFloors";
import { updateElevatorUiAsLongAsElevatorIsMoving } from "./updateElevatorUiAsLongAsElevatorIsMoving";

export const Elevator = () => {
  const [elevator1Floor, setElevator1Floor] = React.useState(Number);
  const [elevator2Floor, setElevator2Floor] = React.useState(Number);
  const [elevator3Floor, setElevator3Floor] = React.useState(Number);
  const [elevator4Floor, setElevator4Floor] = React.useState(Number);
  const [elevator5Floor, setElevator5Floor] = React.useState(Number);
  const [inputValue, setInputValue] = React.useState(Number);

  React.useEffect(() => {
    getElevatorFloors().then((res) => {
      setElevator1Floor(res.elevator1.floor);
      setElevator2Floor(res.elevator2.floor);
      setElevator3Floor(res.elevator3.floor);
      setElevator4Floor(res.elevator4.floor);
      setElevator5Floor(res.elevator5.floor);
    });
  }, []);

  const handleClick = async () => {
    if (inputValue > 20) return alert("There are only 20 floors");
    const response = await axios.post("http://localhost:8080/callElevator", {
      floor: inputValue,
    });
    console.log(response);

    updateElevatorUiAsLongAsElevatorIsMoving({
      floorsForClosestElevatorToTravel: response.data.data,
      setElevator1Floor,
      setElevator2Floor,
      setElevator3Floor,
      setElevator4Floor,
      setElevator5Floor,
    });
  };

  return (
    <div style={styles.contentDiv}>
      <div style={styles.centeredContent}>
        <div style={styles.liftDiv}>
          <LiftInterface elevatorNumber="1" elevatorFloor={elevator1Floor} />
          <LiftInterface elevatorNumber="2" elevatorFloor={elevator2Floor} />
          <LiftInterface elevatorNumber="3" elevatorFloor={elevator3Floor} />
          <LiftInterface elevatorNumber="4" elevatorFloor={elevator4Floor} />
          <LiftInterface elevatorNumber="5" elevatorFloor={elevator5Floor} />
        </div>
        <div style={styles.inputDiv}>
          <label>Call elevator to </label>
          <input
            type="number"
            onChange={(e) => setInputValue(parseInt(e.target.value))}
          />
          <button style={styles.button} onClick={() => handleClick()}>
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contentDiv: {
    width: "100vw",
    height: "100vh",
  },
  centeredContent: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties,
  liftDiv: {
    display: "flex",
    flexDirection: "row",
  } as CSSProperties,
  inputDiv: {
    marginTop: "50px",
  },
  button: {
    color: "green",
  },
};

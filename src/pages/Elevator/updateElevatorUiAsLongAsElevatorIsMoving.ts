import { Dispatch } from "react";
import { getElevatorFloors } from "./getElevatorFloors";

export const updateElevatorUiAsLongAsElevatorIsMoving: StartGetElevatorInterval = ({
  floorsForClosestElevatorToTravel,
  setElevator1Floor,
  setElevator2Floor,
  setElevator3Floor,
  setElevator4Floor,
  setElevator5Floor,
}) => {
  const timeForElevatorToGetToRequestedFloor =
    floorsForClosestElevatorToTravel * 1000 * 2;

  const interval = setInterval(() => {
    getElevatorFloors().then((res) => {
      setElevator1Floor(res.elevator1.floor);
      setElevator2Floor(res.elevator2.floor);
      setElevator3Floor(res.elevator3.floor);
      setElevator4Floor(res.elevator4.floor);
      setElevator5Floor(res.elevator5.floor);
    });
  }, 250);

  setInterval(() => {
    clearInterval(interval);
  }, timeForElevatorToGetToRequestedFloor);
};

type StartGetElevatorInterval = (args: {
  floorsForClosestElevatorToTravel: number;
  setElevator1Floor: Dispatch<React.SetStateAction<number>>;
  setElevator2Floor: Dispatch<React.SetStateAction<number>>;
  setElevator3Floor: Dispatch<React.SetStateAction<number>>;
  setElevator4Floor: Dispatch<React.SetStateAction<number>>;
  setElevator5Floor: Dispatch<React.SetStateAction<number>>;
}) => void;

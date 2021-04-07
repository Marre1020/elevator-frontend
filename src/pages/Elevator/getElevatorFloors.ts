import axios from "axios";

export const getElevatorFloors: GetElevatorState = async () => {
  return axios.get("http://localhost:8080/getElevatorState").then((res) => {
    const elevator1 = res.data.find((e: ElevatorObject) => e.elevator === "1");
    const elevator2 = res.data.find((e: ElevatorObject) => e.elevator === "2");
    const elevator3 = res.data.find((e: ElevatorObject) => e.elevator === "3");
    const elevator4 = res.data.find((e: ElevatorObject) => e.elevator === "4");
    const elevator5 = res.data.find((e: ElevatorObject) => e.elevator === "5");
    return {
      elevator1,
      elevator2,
      elevator3,
      elevator4,
      elevator5,
    };
  });
};

type GetElevatorState = () => Promise<{
  elevator1: ElevatorObject;
  elevator2: ElevatorObject;
  elevator3: ElevatorObject;
  elevator4: ElevatorObject;
  elevator5: ElevatorObject;
}>;

export type ElevatorObject = { elevator: string; floor: number; busy: boolean };

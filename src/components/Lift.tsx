import React from "react";

interface Params {
  elevatorNumber: string;
  elevatorFloor: number;
}

const LiftInterface = ({ elevatorNumber, elevatorFloor }: Params) => {
  return (
    <div>
      <h5>Elevator {elevatorNumber}</h5>
      <div style={styles.liftInterface}>{elevatorFloor}</div>
    </div>
  );
};

export default LiftInterface;

const styles = {
  liftInterface: {
    border: "1px solid black",
    padding: "20px",
    marginRight: "40px",
  },
};

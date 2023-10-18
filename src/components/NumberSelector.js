import styled from "styled-components";
import { useState } from "react";
import RoleDice from "./RoleDice";

const NumberSelector = ({ setError ,error, selectedNumber, setSelectedNumber }) => {
  const boxArray = [1, 2, 3, 4, 5, 6];
  const ErrorHandler = (values) =>{
    setSelectedNumber(values)
    setError("")

  }
  return (
    <Container>
       <p className="error">{error}</p>
      <div className="flex">
        {boxArray.map((values, i) => {
          return (
            <Box
              isSelected={values === selectedNumber}
              key={i}
              onClick={() =>ErrorHandler(values)}
            >
              {values}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelector;
const Container = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color:red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

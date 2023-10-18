import React from "react";
import TotleScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error , setError] = useState("")
  const [showRules , setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if(!selectedNumber){
        setError("you have not selected the number")
        return
    }   
    let randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if(selectedNumber === randomNumber){
        setScore((prev)=>prev+randomNumber)
    }else{
        setScore((prev)=>prev-2)
    }
    setSelectedNumber(undefined)
  };

  const resetScore = () =>{
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotleScore score = {score}/>
        <NumberSelector
          setError = {setError}
          error = {error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-item: end;
  }
  .btn {
    margin-top:10px;
    display: flex;
    flex-direction:column;
    align-items:center;
    gap:15px; 
  }
`;

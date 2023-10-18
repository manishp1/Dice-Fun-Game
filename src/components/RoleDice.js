import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
 
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={require(`../assets/dice_${currentDice}.png`)} />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 25px;
  }

  .dice {
    cursor: pointer;
  }
`;

import react from "react";
import styled from "styled-components";
import dices from "../assets/dices.png";
import { Button } from "../styled/Button";

const StartGame = (props) => {
  return (
    <Container>
      <div>
        <img src={dices} />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={props.toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 1180px;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;



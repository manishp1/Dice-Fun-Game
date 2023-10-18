import styled from 'styled-components'
import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';


function App() {
  const [isGameStarted , setIsGameStarted] = useState(false)
    const toggleComponet = () =>{
        setIsGameStarted((prev)=>!prev)
    } 
  return (
    
    <div>
      {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleComponet} />}
    </div>
  );
}

export default App;

import { useState } from "react"

export default function Ludo(){
  const [moves, setMoves] = useState({ 
    blue: 0, red: 0, yellow: 0, green: 0  // Fixed: "Green" → "green"
  });

  const updateBlue = () => {
    setMoves(prevMoves => ({
      ...prevMoves, 
      blue: prevMoves.blue + 1  // Immutable update
    }));
  };

  const updateRed = () => {
    setMoves(prevMoves => ({
      ...prevMoves, 
      red: prevMoves.red + 1
    }));
  };

  const updateYellow = () => {
    setMoves(prevMoves => ({
      ...prevMoves, 
      yellow: prevMoves.yellow + 1
    }));
  };

  const updateGreen = () => {
    setMoves(prevMoves => ({
      ...prevMoves,  
      green: prevMoves.green + 1
    }));
  };

  return (
    <div>
      <p>welcome to new game</p>
      
      <div>
        <p>Yellow move: {moves.yellow}</p>
        <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
      </div>
      
      <div>
        <p>Red move: {moves.red}</p>
        <button style={{backgroundColor: "red", color: "white"}} onClick={updateRed}>+1</button>
      </div>
      
      <div>
        <p>Green move: {moves.green}</p>
        <button style={{backgroundColor: "green", color: "white"}} onClick={updateGreen}>+1</button>
      </div>
      
      <div>
        <p>Blue move: {moves.blue}</p>
        <button style={{backgroundColor: "blue", color: "white"}} onClick={updateBlue}>+1</button>
      </div>
    </div>
  );
}

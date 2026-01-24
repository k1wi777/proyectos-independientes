import "./App.css";
import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import LogTurns from "./Components/LogTurns/LogTurns";
import GameOver from "./Components/GameOver/GameOver";

import { useState } from "react"; //react hook
import { WINNING_COMBINATIONS } from "./data/winningCombination";

function setActivePlayer(gameTurns, playerSymbols) {
  if (gameTurns.length === 0) {
    return playerSymbols.symbol1;
  }

  if (gameTurns.length > 4 && gameTurns[0].hasWinner) {
    return gameTurns[0].symbol;
  }

  return gameTurns[0].symbol == playerSymbols.symbol1
    ? playerSymbols.symbol2
    : playerSymbols.symbol1;
}
function setHasWinner(prevGameTurns, newGameBoard) {
  if (prevGameTurns.length >= 4) {
    for (const combination of WINNING_COMBINATIONS) {
      const [first, second, third] = combination;

      const [firstSymbol, secondSymbol, thirdSymbol] = [
        newGameBoard[first.row][first.column],
        newGameBoard[second.row][second.column],
        newGameBoard[third.row][third.column],
      ];

      if (firstSymbol && firstSymbol === secondSymbol &&secondSymbol === thirdSymbol) {
        return { isWinner: true, winningCombination: combination };
      }
    }
    return false;
  }
  return false;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    name1: "jugador 1",
    name2: "jugador 2",
  });
  const [playerSymbols, setPlayerSymbols] = useState({
    symbol1: "X",
    symbol2: "O",
  });

  function handleChangeName(evento, nameKey) {
    // console.log(evento);
    setPlayerNames((prevPlayerNames) => {
      
      const otherKey = nameKey === "name1" ? "name2" : "name1";
      const newPlayerNames = {
        [nameKey]: evento.target.value,
        [otherKey]: prevPlayerNames[otherKey],
      };
      return newPlayerNames;
    });
  }
  function handleChangeSymbol(evento, symbolKey, gameTurnsLength) {
    // console.log(evento);
    setPlayerSymbols((prevPlayerSymbols) => {
      
      const otherKey = symbolKey === "symbol1" ? "symbol2" : "symbol1";
      const newPlayerSymbols = {
        [symbolKey]: evento.target.value,
        [otherKey]: prevPlayerSymbols[otherKey],
      };

      if (gameTurnsLength > 1) {
        alert(
          "Los simbolos solo pueden ser cambiados en el primer turno de cada jugador",
        );
       
        return prevPlayerSymbols;
      }
      if (newPlayerSymbols.symbol1 === newPlayerSymbols.symbol2) {
        alert("los simbolos no pueden ser iguales");
        
        return prevPlayerSymbols;
      }
      return newPlayerSymbols;
    });
  }

  function handleSelectedSquare(rowIndex, colIndex, gameBoard) {
    setGameTurns((prevGameTurns) => {
      const actualSymbol = setActivePlayer(prevGameTurns, playerSymbols);

      let newGameBoard = [...gameBoard];
      newGameBoard[rowIndex][colIndex] = actualSymbol;

      const hasWinner = setHasWinner(prevGameTurns, newGameBoard);

      const actualGameTurns = [
        {
          square: { rowIndex: rowIndex, colIndex: colIndex },
          symbol: actualSymbol,
          hasWinner: hasWinner,
        },
        ...prevGameTurns, //copio el array de turnos anteriores
      ];
      
      return actualGameTurns;
    });
  }

  function handleRestartGame() {
    setGameTurns([]);
  }

  const activePlayer = setActivePlayer(gameTurns, playerSymbols);

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="playersContainer" className="highlight-player">
            <Player
              namePlayer={playerNames.name1}
              onChangeName={handleChangeName}
              keyName="name1"
              onChangeSymbol={handleChangeSymbol}
              keySymbol="symbol1"
              playerSymbol={playerSymbols.symbol1}
              isActive={activePlayer === playerSymbols.symbol1}
              gameTurnsLength={gameTurns.length}
            ></Player>
            <Player
              namePlayer={playerNames.name2}
              onChangeName={handleChangeName}
              keyName="name2"
              onChangeSymbol={handleChangeSymbol}
              keySymbol="symbol2"
              playerSymbol={playerSymbols.symbol2}
              isActive={activePlayer === playerSymbols.symbol2}
              gameTurnsLength={gameTurns.length}
            ></Player>
          </ol>

          {gameTurns.length > 4 && gameTurns[0].hasWinner && (
            <GameOver
              title="¡revancha!"
              handleRestartGame={handleRestartGame}
            ></GameOver>
          )}
          {gameTurns.length > 8 && !gameTurns[0].hasWinner && (
            <GameOver
              title="¡otra partida!"
              handleRestartGame={handleRestartGame}
            ></GameOver>
          )}

          <GameBoard
            gameTurns={gameTurns}
            onSelectedSquare={handleSelectedSquare}
          />
        </div>
        <LogTurns
          playerNames={playerNames}
          playerSymbols={playerSymbols}
          gameTurns={gameTurns}
        />
      </main>
    </>
  );
}

export default App;

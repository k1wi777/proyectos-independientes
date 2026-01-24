import "./Player.css";
import { useState } from "react";

export default function Player({
  namePlayer,
  onChangeName,
  onChangeSymbol,
  keySymbol,
  keyName,
  playerSymbol,
  isActive,
  gameTurnsLength,
}) {
  // const [playerName, setPlayerName]=  useState(initialName);
  const [isEditing, setIsEditing] = useState(false); //estado

  //funcion para manejar mi estado
  function handleClickButton() {
    //forma correcta
    setIsEditing((isEditing) => !isEditing);
    //forma incorrecta
    // setIsEditing(!isEditing);
  }
  /* 
  function handleChangeName(evento){
    // console.log(evento);
     setPlayerName(evento.target.value);
  } */

  const playerNameField = isEditing ? (
    <input
      type="text"
      required
      value={namePlayer}
      onChange={(evento) => onChangeName(evento, keyName)}
    />
  ) : (
    <span className="player-name">{namePlayer}</span>
  );

  const playerSymbolField = isEditing ? (
    <input
      type="text"
      required
      maxLength="1"
      value={playerSymbol}
      onChange={(evento) => onChangeSymbol(evento, keySymbol, gameTurnsLength)}
    />
  ) : (
    <span className="player-symbol">{playerSymbol}</span>
  );

  const buttonChangeValue = isEditing ? "guardar" : "cambiar";
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {playerNameField}
          {playerSymbolField}
        </span>
        <button onClick={() => handleClickButton()} disabled={!isActive}>
          {buttonChangeValue}
        </button>
      </li>
    </>
  );
}

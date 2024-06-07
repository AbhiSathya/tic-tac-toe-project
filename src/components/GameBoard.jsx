// import React, { useState } from "react";
// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({ onSelectSquare, board }) {
  // let gameBoard = initialGameBoard;

  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, column } = square;

  //   gameBoard[row][column] = player;
  // }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleClickBox(rowIdx, colIdx) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray])];
  //     updatedGameBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, columnIdx) => (
              <li key={columnIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, columnIdx)}
                  disabled={playerSymbol === null ? false : true}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

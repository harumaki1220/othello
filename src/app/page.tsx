'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setboard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    if (board[y][x] !== 0) return null;
    let flipped = false;
    directions.forEach(([dy, dx]) => {
      let n = 0;
      if (board[y + dy] !== undefined && board[y + dy][x + dx] === 2 / turnColor) {
        while (
          board[y + dy * (n + 1)] !== undefined &&
          board[y + dy * (n + 1)][x + dx * (n + 1)] !== undefined &&
          board[y + dy * (n + 1)][x + dx * (n + 1)] === 2 / turnColor
        ) {
          n++;
        }
        if (
          board[y + dy * (n + 1)] !== undefined &&
          board[y + dy * (n + 1)][x + dx * (n + 1)] !== undefined &&
          board[y + dy * (n + 1)][x + dx * (n + 1)] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          for (let i = 1; i <= n; i++) {
            newBoard[y + dy * i][x + dx * i] = turnColor;
          }
          flipped = true;
        }
      }
    });
    if (flipped) {
      setTurnColor(2 / turnColor);
      setboard(newBoard);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}

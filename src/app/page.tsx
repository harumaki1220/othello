'use client';

import { useState } from 'react';
import styles from './page.module.css';
let flip = false;
const colorC = (
  board: number[][],
  y: number,
  x: number,
  directions: number[][],
  turnColor: number,
) => {
  flip = false;
  const newBoard = structuredClone(board);
  if (board[y][x] === 0 || board[y][x] === 3)
    directions.forEach(([dy, dx]) => {
      let n = 1;
      if (board[y + dy] !== undefined && board[y + dy][x + dx] === 2 / turnColor) {
        while (board[y + dy * n] !== undefined && board[y + dy * n][x + dx * n] === 2 / turnColor) {
          n++;
        }
        if (board[y + dy * n] !== undefined && board[y + dy * n][x + dx * n] === turnColor) {
          flip = true;
          newBoard[y][x] = turnColor;
          for (let i = 1; i <= n; i++) {
            newBoard[y + dy * i][x + dx * i] = turnColor;
          }
          if (board[y + dy * n] !== undefined && board[y + dy * n][x + dx * n] === turnColor) {
            newBoard[y][x] = turnColor;
          }
        }
      }
    });
  return newBoard;
};

const reference = (directions: number[][], board: number[][], turnColor: number) => {
  const newBoard = structuredClone(board);
  for (let y = 0; y <= 7; y++) {
    for (let x = 0; x <= 7; x++) {
      if (newBoard[y][x] === 3) {
        newBoard[y][x] = 0;
      }
    }
  }
  for (let y = 0; y <= 7; y++) {
    for (let x = 0; x <= 7; x++) {
      if (newBoard[y][x] === 0) {
        directions.forEach(([dy, dx]) => {
          if (board[y + dy] !== undefined && board[y + dy][x + dx] === 2 / turnColor) {
            for (let n = 1; n < 9; n++) {
              if (
                board[y + dy * n] === undefined ||
                board[y + dy * n][x + dx * n] === 0 ||
                board[y + dy * n][x + dx * n] === 3
              ) {
                break;
              }

              if (board[y + dy * n] !== undefined && board[y + dy * n][x + dx * n] === turnColor) {
                newBoard[y][x] = 3;
              }
            }
          }
        });
      }
    }
  }
  return newBoard;
};

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
  ]); // 0: なし , 1: 黒, 2: 白
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
    const p = colorC(board, y, x, directions, turnColor);
    const f = reference(directions, p, 2 / turnColor);
    if (flip) {
      setTurnColor(2 / turnColor);
      setboard(f);
    }
  };

  type CountMap = Record<number, number>;
  const flat = board.flat();
  const count = flat.reduce<CountMap>((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {} as CountMap);
  const blackPoint = count[1] === undefined ? 0 : count[1];
  const whitePoint = count[2] === undefined ? 0 : count[2];

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : color === 2 ? '#fff' : '#ff0' }}
                />
              )}
            </div>
          )),
        )}
        <div className={styles.scoreBoard}>
          <div className={styles.scoreBlack}>
            <p>BLACK {blackPoint}</p>
          </div>
          <div className={styles.scoreWhite}>
            <p>WHITE {whitePoint}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

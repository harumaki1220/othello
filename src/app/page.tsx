'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setboard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    let h: number = 0;
    if (board[y + 1] !== undefined && board[y + 1][x] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
      setboard(newBoard);
      if (turnColor === 1) {
        if (board[y + 1][x] === 2) {
          newBoard[y + 1][x] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y + 1][x] === 1) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y + 2][x] === 2) {
            newBoard[y + 2][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 2][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 3][x] === 2) {
            newBoard[y + 3][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 3][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 4][x] === 2) {
            newBoard[y + 4][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 4][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 5][x] === 2) {
            newBoard[y + 5][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 5][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 6][x] === 2) {
            newBoard[y + 6][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 6][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 7][x] === 2) {
            newBoard[y + 7][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 7][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      } else if (turnColor === 2) {
        if (board[y + 1][x] === 1) {
          newBoard[y + 1][x] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y + 1][x] === 2) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y + 2][x] === 1) {
            newBoard[y + 2][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 2][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 3][x] === 1) {
            newBoard[y + 3][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 3][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 4][x] === 1) {
            newBoard[y + 4][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 4][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 5][x] === 1) {
            newBoard[y + 5][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 5][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 6][x] === 1) {
            newBoard[y + 6][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 6][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 7][x] === 1) {
            newBoard[y + 7][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 7][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      }
    }
    if (board[y - 1] !== undefined && board[y - 1][x] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
      setboard(newBoard);
      console.log(h);
      if (turnColor === 1) {
        if (board[y - 1][x] === 2) {
          newBoard[y - 1][x] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y - 1][x] === 1) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y - 2][x] === 2) {
            newBoard[y - 2][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 2][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 3][x] === 2) {
            newBoard[y - 3][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 3][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 4][x] === 2) {
            newBoard[y - 4][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 4][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 5][x] === 2) {
            newBoard[y - 5][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 5][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 6][x] === 2) {
            newBoard[y - 6][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 6][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 7][x] === 2) {
            newBoard[y - 7][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 7][x] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      } else if (turnColor === 2) {
        if (board[y - 1][x] === 1) {
          newBoard[y - 1][x] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y - 1][x] === 2) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y - 2][x] === 1) {
            newBoard[y - 2][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 2][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 3][x] === 1) {
            newBoard[y - 3][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 3][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 4][x] === 1) {
            newBoard[y - 4][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 4][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 5][x] === 1) {
            newBoard[y - 5][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 5][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 6][x] === 1) {
            newBoard[y - 6][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 6][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 7][x] === 1) {
            newBoard[y - 7][x] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 7][x] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      }
    }
    if (board[x - 1] !== undefined && board[y][x - 1] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
      setboard(newBoard);
      console.log(h);
      if (turnColor === 1) {
        if (board[y][x - 1] === 2) {
          newBoard[y][x - 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y][x - 1] === 1) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y][x - 2] === 2) {
            newBoard[y][x - 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 2] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 3] === 2) {
            newBoard[y][x - 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 3] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 4] === 2) {
            newBoard[y][x - 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 4] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 5] === 2) {
            newBoard[y][x - 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 5] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 6] === 2) {
            newBoard[y][x - 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 6] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      } else if (turnColor === 2) {
        if (board[y][x - 1] === 1) {
          newBoard[y][x - 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y][x - 1] === 2) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y][x - 2] === 1) {
            newBoard[y][x - 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 2] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 3] === 1) {
            newBoard[y][x - 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 3] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 4] === 1) {
            newBoard[y][x - 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 4] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 5] === 1) {
            newBoard[y][x - 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 5] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 6] === 1) {
            newBoard[y][x - 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 6] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x - 7] === 1) {
            newBoard[y][x - 7] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x - 7] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      }
    }
    if (board[x + 1] !== undefined && board[y][x + 1] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
      setboard(newBoard);
      console.log(h);
      if (turnColor === 1) {
        if (board[y][x + 1] === 2) {
          newBoard[y][x + 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y][x + 1] === 1) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y][x + 2] === 2) {
            newBoard[y][x + 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 2] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 3] === 2) {
            newBoard[y][x + 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 3] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 4] === 2) {
            newBoard[y][x + 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 4] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 5] === 2) {
            newBoard[y][x + 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 5] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 6] === 2) {
            newBoard[y][x + 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 6] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      } else if (turnColor === 2) {
        if (board[y][x + 1] === 1) {
          newBoard[y][x + 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y][x + 1] === 2) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y][x + 2] === 1) {
            newBoard[y][x + 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 2] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 3] === 1) {
            newBoard[y][x + 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 3] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 4] === 1) {
            newBoard[y][x + 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 4] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 5] === 1) {
            newBoard[y][x + 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 5] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y][x + 6] === 1) {
            newBoard[y][x + 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y][x + 6] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      }
    }
    if (board[y - 1][x - 1] !== undefined && board[y - 1][x - 1] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
      setboard(newBoard);
      if (turnColor === 1) {
        if (board[y - 1][x - 1] === 2) {
          newBoard[y - 1][x - 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y - 1][x - 1] === 1) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y - 2][x - 2] === 2) {
            newBoard[y - 2][x - 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 2][x - 2] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 3][x - 3] === 2) {
            newBoard[y - 3][x - 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 3][x - 3] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 4][x - 4] === 2) {
            newBoard[y - 4][x - 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 4][x - 4] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 5][x - 5] === 2) {
            newBoard[y - 5][x - 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 5][x - 5] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 6][x - 6] === 2) {
            newBoard[y - 6][x - 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 6][x - 6] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 7][x - 7] === 2) {
            newBoard[y - 7][x - 7] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 7][x - 7] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      } else if (turnColor === 2) {
        if (board[y - 1][x - 1] === 1) {
          newBoard[y - 1][x - 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y - 1][x - 1] === 2) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y - 2][x - 2] === 1) {
            newBoard[y - 2][x - 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 2][x - 2] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 3][x - 3] === 1) {
            newBoard[y - 3][x - 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 3][x - 3] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 4][x - 4] === 1) {
            newBoard[y - 4][x - 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 4][x - 4] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 5][x - 5] === 1) {
            newBoard[y - 5][x - 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 5][x - 5] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 6][x - 6] === 1) {
            newBoard[y - 6][x - 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 6][x - 6] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y - 7][x - 7] === 1) {
            newBoard[y - 7][x - 7] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y - 7][x - 7] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      }
    }
    if (board[y + 1][x + 1] !== undefined && board[y + 1][x + 1] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
      setboard(newBoard);
      if (turnColor === 1) {
        if (board[y + 1][x + 1] === 2) {
          newBoard[y + 1][x + 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y + 1][x + 1] === 1) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y + 2][x + 2] === 2) {
            newBoard[y + 2][x + 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 2][x + 2] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 3][x + 3] === 2) {
            newBoard[y + 3][x + 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 3][x + 3] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 4][x + 4] === 2) {
            newBoard[y + 4][x + 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 4][x + 4] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 5][x + 5] === 2) {
            newBoard[y + 5][x + 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 5][x + 5] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 6][x + 6] === 2) {
            newBoard[y + 6][x + 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 6][x + 6] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 7][x + 7] === 2) {
            newBoard[y + 7][x + 7] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 7][x + 7] === 1) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      } else if (turnColor === 2) {
        if (board[y + 1][x + 1] === 1) {
          newBoard[y + 1][x + 1] = turnColor;
          setTurnColor(2 / turnColor);
          setboard(newBoard);
        } else if (board[y + 1][x + 1] === 2) {
          h += 1;
          setboard(newBoard);
        }
        if (h !== 1) {
          if (board[y + 2][x + 2] === 1) {
            newBoard[y + 2][x + 2] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 2][x + 2] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 3][x + 3] === 1) {
            newBoard[y + 3][x + 3] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 3][x + 3] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 4][x + 4] === 1) {
            newBoard[y + 4][x + 4] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 4][x + 4] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 5][x + 5] === 1) {
            newBoard[y + 5][x + 5] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 5][x + 5] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 6][x + 6] === 1) {
            newBoard[y + 6][x + 6] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 6][x + 6] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        if (h !== 1) {
          if (board[y + 7][x + 7] === 1) {
            newBoard[y + 7][x + 7] = turnColor;
            setTurnColor(2 / turnColor);
            setboard(newBoard);
          } else if (board[y + 7][x + 7] === 2) {
            h += 1;
            setboard(newBoard);
          }
        }
        h = 0;
      }
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

import React, { useState} from 'react'; 
import { calculateWinner } from '../helpers'; 
import Board from './Board'; 

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null)); 
    const [xIsNext, setXisNext] = useState(true); 
    const winner = calculateWinner(board);


    const handleClick = i => {
        //the [...board] makes a shallow copy of the board array
        //'...' = spread (JSX syntax)
        const boardCopy = [...board]; 
        //if user clicks an occupied square or if the game is won, return 
        if (winner || boardCopy[i]) return; 
        // put an x or an 0 in the clicked square
        boardCopy[i] = xIsNext ? 'X' : '0'; 
        setBoard(boardCopy); 
        setXisNext(!xIsNext); 

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <Board squares={board} onClick={handleClick} />
    )
}; 

export default Game; 
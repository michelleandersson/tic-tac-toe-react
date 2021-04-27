import React, { useState} from 'react'; 
import { calculateWinner } from '../helpers'; 
import Board from './Board'; 

const styles = {
    width: '200px', 
    margin: '20px auto', 
}; 

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

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>

    )

    return (
        // <> = fragment (non-specific tag)
        //can only return one element, so using a fragment allows returning several elements inside the fragment

        //currently winner is not being displayed?????????
        <>
            <Board squares={board} onClick={handleClick} />
            <div style= {styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : '0')}</p>
                {renderMoves()}
            </div>
        </>
    )
}; 

export default Game; 

export function calculateWinner(squares) {
    //all winning moves (lookup array)
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6] 
    ]; 

    

    //loop through the lookup array
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]; 
        //check if the first value exists, if the second value matches the first value, and if the thrid value matches
        //the first value (and second value by default). If not, return null
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; 
        }
    }
    return null; 
}; 


// test array to see if it works
// let squares = [
//     null, null, null,
//     'X', 'X', '0', 
//     null, null, null
// ]; 

// console.log(calculateWinner(squares));
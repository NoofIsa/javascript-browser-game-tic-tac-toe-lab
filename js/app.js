

/*-------------------------------- Constants --------------------------------*/

//stores the current values in each square
let board;
//: keeps track of whether it's X’s or O’s turn
let turn;
//: tracks if someone has won
let winner;
//racks if the game ends in a tie
let tie ;
const winningCombos=[
  [0, 1, 2],
  [3, 4, 5],
  [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  
  ];
  let mssg;
/*---------------------------- Variables (state) ----------------------------*/
const squareEls = document.querySelectorAll('.sqr'); 
const messageEl = document.querySelector('#message'); 
//console.log(squareEls);
//console.log(messageEl);
/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init()
{

    console.log('init is running');

    board =['X','','O','O','X','','','',''];
    turn="X";
    winner= false;
    tie= false;
    render();
   
}

//init();


function render()

{
updateBoard();
updateMessage();

}


function updateBoard() {
  board.forEach((value, index) => {
    squareEls[index].textContent = value;
  });
}

function updateMessage()
 {
  
  if (!winner && !tie) {
  mssg= `It's ${turn}'s turn!`;
} 
else if (!winner && tie)
   {
  mssg= "tie";
} 
else if (winner)
   {
  mssg = `Congrats ${turn}! You won!`;
   }

   messageEl.textContent = mssg;
}

function handleClick(event)
{
    //console.log('Square clicked:', event.target);

  const squareIndex = Number(event.target.id);

  console.log('Clicked square index:', squareIndex);
  
if (board[squareIndex] === 'x' || board[squareIndex] === 'o')
    return ;
  else if  (winner=== true) 
        return ;
 
  
}

function placePiece(index)
{
  board[index] = turn;
console.log(board);

}

/*----------------------------- Event Listeners -----------------------------*/
for (let i = 0; i < squareEls.length; i++) {
  squareEls[i].addEventListener('click', handleClick);
}


/*function play(event) {
    computerChoice = getComputerChoice()
    playerChoice = event.target.id
    // after updating state, render to html
    compare()
    render()
}*/

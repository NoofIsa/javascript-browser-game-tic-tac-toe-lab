

/*-------------------------------- Constants --------------------------------*/
const winningCombos=[
  [0, 1, 2],
  [3, 4, 5],
  [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  
  ];
 
/*---------------------------- Variables (state) ----------------------------*/
//stores the current values in each square
let board;
//: keeps track of whether it's X’s or O’s turn
let turn;
//: tracks if someone has won
let winner;
//racks if the game ends in a tie
let tie ;
let mssg;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr'); 
const messageEl = document.querySelector('#message'); 
//console.log(squareEls);
//console.log(messageEl);
const resetBtn = document.getElementById('resetButton');

/*-------------------------------- Functions --------------------------------*/
function init()
{

    console.log('init is running');

    board =['','','','','','','','',''];
    turn="X";
    winner= false;
    tie= false;
    render();
   
}

init();


function render()

{
updateBoard();
updateMessage();

}


function updateBoard() 
{
  board.forEach((value, index) => {
    squareEls[index].textContent = value;
  });
}

function updateMessage()
 {
  
  if (!winner && !tie) 
    {
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
  
if (board[squareIndex] === 'X' || board[squareIndex] === 'O'){
    return ;}
  else if  (winner=== true) {return ;}
  
placePiece(squareIndex);
 checkForWinner();       
console.log('winner status',winner);
checkForTie();
console.log('tie status',tie);
switchPlayerTurn();
  console.log("turn status",turn);
  render();
}

function placePiece(index)
{
  board[index] = turn;
  console.log(board);

}
// check for winner 
function checkForWinner()
{ 
for (let combo of winningCombos) {
    // combo[0], combo[1], combo[2] are the three indexes
    if (
      board[combo[0]] !== '' &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      winner = true;
      return "Win!";
    }
  }
  return false;

}

function checkForTie()
{
if (winner) return; 

  if (!board.includes('')) 
    tie = true;
   else 
    tie = false;
  
}
function switchPlayerTurn ()
{
if (winner)
  {
  return;
  }
else if (!winner && turn==='X')
  { 
    turn='O';
  }
  else if (!winner && turn==='O')
{
  turn='X';
}

}




/*----------------------------- Event Listeners -----------------------------*/
for (let i = 0; i < squareEls.length; i++) {
  squareEls[i].addEventListener('click', handleClick);
}
resetBtn.addEventListener('click', init);



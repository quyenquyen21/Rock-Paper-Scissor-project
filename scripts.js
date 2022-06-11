
let computerSelection;
function computerPlay () {
     const arr = ['rock', 'paper', 'scissor'];
     computerSelection = arr[Math.floor(Math.random()*arr.length)];
     alert(computerSelection);
}


 function playerChoose () {
   let playerSelection1 = window.prompt("Enter your selection: ");
    let x = playerSelection1.toLowerCase()
   return x;};

 let text; 
function playRound(human, computer) {
if (human == computer) {
 text = "choose again"; alert (text)  ;      
} else if (human == "rock" && computer == "paper"){
 text = "you lose paper beats rock"; alert (text); computerScore++
} else if (human == "rock" && computer == "scissor"){
  text = "you win rock beats scissor"; alert (text);playerScore++
} else if (human == "paper" && computer == "rock"){
   text = "you win paper beats rock"; alert (text);playerScore++
} else if (human == "paper" && computer == "scissor"){
   text = "you lose scissor beats paper"; alert (text);computerScore++
} else if (human == "scissor" && computer == "rock"){
   text = "you lose rock beats scissor" ; alert (text);computerScore++
} else if (human == "scissor" && computer == "paper"){
     text = "you win scissor beats paper"; alert (text);playerScore++
   }
}


let computerScore = 0;
let playerScore = 0;

for (let i = 0; i <5 ; i++) {
   let playerSelection = playerChoose();
   computerPlay ();
   playRound(playerSelection, computerSelection);
   
   if (computerScore == 5 || playerScore == 5) {
      break;
   }  

  alert ( "you score is " + playerScore)
   alert ( "computer score is " + computerScore)
   
}
if (playerScore > computerScore) { alert ("you win")
} else if (playerScore < computerScore) {alert ("you lose")
} else if (playerScore == computerScore) {alert ("tie game, play again")}

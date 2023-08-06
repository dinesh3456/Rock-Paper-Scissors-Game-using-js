const rockButton = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');
const roundResult = document.getElementById('round-result');

let playerScore =0;
let computerScore = 0;
const string1 = "rock";
const string2 = "paper";
const string3 = "scissor";

let NumberOfRound = prompt("How many rounds do you want to play: 3 or 5?");
switch(NumberOfRound){
    case 3:
        for(i=0;i<3;i++){
            let choice = prompt("Enter your choice -rock, paper, scissor?");
            let computerChoice ;
            const randomIndex = Math.floor(Math.random()*3);
            if(randomIndex ===0 ){
                computerChoice = string1;
            }
            else if(randomIndex ===1){
                computerChoice === string2;
            }
            else if(randomIndex === 2){
                computerChoice === string3;
            }

            if(computerChoice===choice){
                prompt("No point");
            }
            else if(computerChoice==="rock")
        }
}
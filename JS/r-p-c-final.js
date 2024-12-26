/////   score storage   /////
    /////   儲存結果區塊   /////



    const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    }
// 第二種設定預設值的方法

/* 
if (!score) {
score = {
wins: 0,
losses: 0,
ties: 0
}
};
*/



/////////////////////////////////////////////
//////////       DOM顯示結果       ///////////
/////////////////////////////////////////////



updateScoreElement();




/////     playGame and pop the result   /////
/////      對決電腦出拳並跳出結果功能     /////



function playGame (playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'You lose.';
} else if (computerMove === 'paper') {
result = 'You win.';
} else if (computerMove === 'scissors') {
result = 'Tie.';
}

} else if (playerMove === 'paper') {
if (computerMove === 'rock') {
result = 'You win.';
} else if (computerMove === 'paper') {
result = 'Tie.';
} else if (computerMove === 'scissors') {
result = 'You lose.'
}

} else if (playerMove === 'rock') {
if (computerMove === 'rock') {
result = 'Tie.';
} else if (computerMove === 'paper') {
result = 'You lose.';
} else if (computerMove === 'scissors') {
result = 'You win.'
}
}



if (result === 'You win.') {
score.wins += 1;
} else if (result === 'You lose.') {
score.losses += 1;
} else if (result === 'Tie.') {
score.ties += 1;
}



/////   save score    /////
/////   儲存結果區塊   /////



localStorage.setItem('score', JSON.stringify(score));



/////   pop result part   /////
/////      跳出結果區塊    /////



updateScoreElement();



document.querySelector('.js-result').innerHTML = result;



document.querySelector('.js-moves').innerHTML = `You <img class="vs-icon" src="/img/${playerMove}-emoji.png" alt="move-icon"> VS <img class="vs-icon" src="/img/${computerMove}-emoji.png" alt="move-icon"> Computer`;
}


/////        更新結果功能        /////



function updateScoreElement () {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}




/////   computerMove function   /////
/////        電腦出拳功能        /////



function pickComputerMove () {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = 'scissors';
}

return computerMove;
}
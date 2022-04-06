let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let msg = document.getElementById("message-el");
let cardEl = document.getElementById("num1");
let sumEl = document.querySelector("#num2");    

let player = {
    name: "Gourav",
    chips: 150
}
let playerEl = document.getElementById("player");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    let isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomCard() {
    // This function will generate numbers till 11 and +1 will use addition to avoid 0 in genrated numbers
    // ASSUMPTIONS
    // if 1     -> return 11
    // if 11-13 -> return 10
    let cardNum = Math.floor(Math.random()*13) + 1;
    if (cardNum === 1) {
        return 11
    } else if (cardNum > 10){
        return 10
    } else {
        return cardNum
    }
}

function renderGame(){
    sumEl.textContent = sum;
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
    cardEl.textContent += cards[i] + " "; 
        if (sum <=20){        
        msg.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        msg.textContent = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        msg.textContent = "You're out of the game!";
        isAlive = false
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    } 
}
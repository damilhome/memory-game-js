const emojis = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾', '👽', '👽', '👻', '👻', '☠', '☠', '😈', '😈'];
const resetBtn = document.getElementById('reset-btn');
const gameDifficulty = document.getElementById('game-difficulty');
const gameCards = document.getElementById('game-cards');
const easy = 24;
let turnedCards = [];

const checkMatch = () => {
    if(turnedCards[0].textContent === turnedCards[1].textContent) {
        turnedCards[0].classList.add('match');
        turnedCards[1].classList.add('match');
    } else {
        turnedCards[0].classList.remove('open');
        turnedCards[1].classList.remove('open');
    }

    turnedCards = [];
}

const turnCard = (e) => {
    e.target.classList.add('open');
    turnedCards.push(e.target);

    if(turnedCards.length === 2) {
        console.log('check match')
        setTimeout(checkMatch, 500)
    }
}


window.onload = () => {
    if(gameDifficulty.value === 'easy') {
        const shuffledEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1)
        for(let i = 0; i < easy; i++) {
            const card = document.createElement('div');
            card.className = 'game__card';
            card.textContent = shuffledEmojis[i];
            card.onclick = turnCard
            gameCards.appendChild(card);
        }
    }
}
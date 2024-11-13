const emojis = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾', '👽', '👽', '👻', '👻', '☠', '☠', '😈', '😈'];
const resetBtn = document.getElementById('reset-btn');
const gameDifficulty = document.getElementById('game-difficulty');
const gameCards = document.getElementById('game-cards');
const easy = 24;
let turnedCards = 0;

const turnCard = (e) => {
    e.target.classList.add('open');
    turnedCards++

    if(turnedCards == 2) {
        
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
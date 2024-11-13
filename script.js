const emojisEasy = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳'];
const emojisMedium = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾'];
const emojisHard = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾', '👽', '👽', '👻', '👻', '☠', '☠', '😈', '😈', '🤐', '🤐', '😴', '😴', '🙃', '🙃', '😱', '😱', '🤫', '🤫', '🤓', '🤓'];
const emojisVeryHard = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾', '👽', '👽', '👻', '👻', '☠', '☠', '😈', '😈', '😱', '😱', '🤓', '🤓', '🎃', '🎃', '🎊', '🎊', '🧨', '🧨', '🎇', '🎇', '🎆', '🎆', '🎈', '🎈', '🎄', '🎄', '🎎', '🎎', '🎁', '🎁', '🎪', '🎪', '🎭', '🎭', '🎢', '🎢', '🎨', '🎨', '🎡', '🎡', '🎠', '🎠', '✨', '✨'];
const resetBtn = document.getElementById('reset-btn');
const gameDifficulty = document.getElementById('game-difficulty');
const gameCards = document.getElementById('game-cards');
const easy = emojisEasy.length;
const medium = emojisMedium.length;
const hard = emojisHard.length;
const veryHard = emojisVeryHard.length;
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

    if(document.querySelectorAll('.match').length = emojisEasy.length) {
        
    }
}

const turnCard = (e) => {
    e.target.classList.add('open');
    turnedCards.push(e.target);

    if(turnedCards.length === 2) {
        console.log('check match')
        setTimeout(checkMatch, 500)
    }
}

const resetGame = () => {
    if(gameDifficulty.value === 'easy') {
        const shuffledEmojis = emojisEasy.sort(() => Math.random() > 0.5 ? 2 : -1)
        for(let i = 0; i < easy; i++) {
            const card = document.createElement('div');
            card.className = 'game__card';
            card.textContent = shuffledEmojis[i];
            card.onclick = turnCard
            gameCards.appendChild(card);
        }
    } else if(gameDifficulty.value === 'medium') {
        const shuffledEmojis = emojisMedium.sort(() => Math.random() > 0.5 ? 2 : -1)
        for(let i = 0; i < medium; i++) {
            const card = document.createElement('div');
            card.className = 'game__card';
            card.textContent = shuffledEmojis[i];
            card.onclick = turnCard
            gameCards.appendChild(card);
        }
    } else if(gameDifficulty.value === 'hard') {
        const shuffledEmojis = emojisHard.sort(() => Math.random() > 0.5 ? 2 : -1)
        for(let i = 0; i < hard; i++) {
            const card = document.createElement('div');
            card.className = 'game__card';
            card.textContent = shuffledEmojis[i];
            card.onclick = turnCard
            gameCards.appendChild(card);
        }
    } else if(gameDifficulty.value == 'very-hard') {
        const shuffledEmojis = emojisVeryHard.sort(() => Math.random() > 0.5 ? 2 : -1)
        for(let i = 0; i < veryHard; i++) {
            const card = document.createElement('div');
            card.className = 'game__card';
            card.textContent = shuffledEmojis[i];
            card.onclick = turnCard
            gameCards.appendChild(card);
        }
    }
}

window.onload = resetGame
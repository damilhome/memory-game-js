const emojisEasy = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳'];
const emojisMedium = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾'];
const emojisHard = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾', '👽', '👽', '👻', '👻', '☠', '☠', '😈', '😈', '🤐', '🤐', '😴', '😴', '🙃', '🙃', '😱', '😱', '🤫', '🤫', '🤓', '🤓'];
const emojisVeryHard = ['🤯', '🤯','😎', '😎', '🤩', '🤩', '😜', '😜', '🥶', '🥶', '🤑', '🤑', '🤪', '🤪', '😵', '😵', '🥴', '🥴', '😡', '😡', '😇', '😇', '🥳', '🥳', '🤠', '🤠', '🤡', '🤡', '🤥', '🤥', '💀', '💀', '👺', '👺', '👹', '👹', '🤖', '🤖', '👾', '👾', '👽', '👽', '👻', '👻', '☠', '☠', '😈', '😈', '😱', '😱', '🤓', '🤓', '🎃', '🎃', '🎊', '🎊', '🧨', '🧨', '🎇', '🎇', '🎆', '🎆', '🎈', '🎈', '🎄', '🎄', '🎎', '🎎', '🎁', '🎁', '🎪', '🎪', '🎭', '🎭', '🎢', '🎢', '🎨', '🎨', '🎡', '🎡', '🎠', '🎠', '✨', '✨'];
const resetBtn = document.getElementById('reset-btn');
const gameDifficulty = document.getElementById('game-difficulty');
const dialogGameDifficulty = document.getElementById('dialog-game-difficulty');
const gameCards = document.getElementById('game-cards');
const winningFeedback = document.getElementById('winning-feedback');
const dialogResetBtn = document.getElementById('dialog-reset-btn');
const dialogCancelBtn = document.getElementById('dialog-cancel-btn');
let turnedCards = [];

const showFeedback = () => {
    switch (gameDifficulty.value) {
        case 'easy':
            if(document.querySelectorAll('.match').length === emojisEasy.length) {
                dialogGameDifficulty.value = gameDifficulty.value;
                winningFeedback.showModal();
            }
            break;
        case 'medium':
            if(document.querySelectorAll('.match').length === emojisMedium.length) {
                dialogGameDifficulty.value = gameDifficulty.value;
                winningFeedback.showModal();
            }
            break;
        case 'hard':
            if(document.querySelectorAll('.match').length === emojisHard.length) {
                dialogGameDifficulty.value = gameDifficulty.value;
                winningFeedback.showModal();
            }
            break;
        case 'very-hard':
            if(document.querySelectorAll('.match').length === emojisVeryHard.length) {
                dialogGameDifficulty.value = gameDifficulty.value;
                winningFeedback.showModal();
            }
            break;
    }
}

const checkMatch = () => {
    if(turnedCards[0].textContent === turnedCards[1].textContent) {
        turnedCards[0].classList.add('match');
        turnedCards[1].classList.add('match');
    } else {
        turnedCards[0].classList.remove('open');
        turnedCards[1].classList.remove('open');
    }

    turnedCards = [];

    showFeedback();
}

const turnCard = (e) => {
    e.target.classList.add('open');
    turnedCards.push(e.target);

    if(turnedCards.length === 2) {
        console.log('check match')
        setTimeout(checkMatch, 500)
    }
}

const createCards = (shuffledEmojis) => {
    for(let i = 0; i < shuffledEmojis.length; i++) {
        const card = document.createElement('div');
        card.className = 'game__card';
        card.textContent = shuffledEmojis[i];
        card.onclick = turnCard
        gameCards.appendChild(card);
    }
}

const resetGame = () => {
    gameCards.innerHTML = '';
    if(gameDifficulty.value === 'easy') {
        const shuffledEmojis = emojisEasy.sort(() => Math.random() > 0.5 ? 2 : -1);
        createCards(shuffledEmojis);
    } else if(gameDifficulty.value === 'medium') {
        const shuffledEmojis = emojisMedium.sort(() => Math.random() > 0.5 ? 2 : -1)
        createCards(shuffledEmojis);
    } else if(gameDifficulty.value === 'hard') {
        const shuffledEmojis = emojisHard.sort(() => Math.random() > 0.5 ? 2 : -1)
        createCards(shuffledEmojis);
    } else if(gameDifficulty.value == 'very-hard') {
        const shuffledEmojis = emojisVeryHard.sort(() => Math.random() > 0.5 ? 2 : -1)
        createCards(shuffledEmojis);
    }
}

dialogResetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    gameDifficulty.value = dialogGameDifficulty.value;
    winningFeedback.close();
    resetGame()
})

dialogCancelBtn.addEventListener('click', () => winningFeedback.close())

window.onload = resetGame;
"use strict";
const gameScreen = document.querySelector('#gameScreen');
const numCards = document.querySelectorAll('.numCard');
for (let i = 0; i < numCards.length; i++) {
    numCards[i].innerHTML = Math.floor(Math.random() * 10).toString();
}
//# sourceMappingURL=index.js.map
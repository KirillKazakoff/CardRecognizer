import './card.css';

export default class Cards {
    constructor(selector) {
        this.cards = [...document.querySelector(selector).children];
        this.activeCard = null;
    }

    highlightCard(name) {
        if (this.activeCard) {
            this.activeCard.classList.remove('card__active');
        }
        this.activeCard = null;

        const foundCard = this.cards.find((card) => card.className.includes(name));
        if (foundCard) {
            foundCard.classList.add('card__active');
            this.activeCard = foundCard;
        }
    }
}

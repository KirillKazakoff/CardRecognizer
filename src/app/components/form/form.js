import './form.css';
import '../card/card.css';

import Cards from '../card/cards';
import { getCardCompany, getCardCheck } from '../../lib/utils';

export default class Form {
    constructor() {
        this.container = document.querySelector('.form');
        this.cards = new Cards('.card__list');
        this.input = this.container.querySelector('.validate__input');

        this.container.addEventListener('submit', (e) => {
            e.preventDefault();

            const { value } = this.input;
            const isCardValid = getCardCheck(value);
            let company = null;

            if (isCardValid) {
                company = getCardCompany(value);
            } else {
                const div = document.createElement('div');
                div.className = 'error';
                div.textContent = 'you put wrong value';
                this.container.appendChild(div);
                setTimeout(() => div.remove(), 1000);
            }
            this.cards.highlightCard(`card__${company}`);
        });
    }
}

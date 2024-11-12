import { cardBoxes } from "./globals";

export function saveCards() {
    let formData = {};
    for (let i = 0; i < cardBoxes.length; i++) {
        let box = [];
        let cards =  Array.from(cardBoxes[i].children);
        cards.forEach(card => {
            let cardText = card.firstChild;
            box.push(cardText.textContent);
        });
        formData[i] = box;
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}
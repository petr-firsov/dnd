import { cardBoxes } from "./js/globals";
import { dragCard } from "./js/drag_card";
import { removeCard } from "./js/remove_card.";

export function importCards() {
    const json = localStorage.getItem('formData');
    let formData = JSON.parse(json);
    if (formData) {
        let array = [];
        for (let key in formData) {
            array.push(formData[key]);
        }
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                let card = document.createElement('div');
                card.classList.add('card');
                card.textContent = array[i][j];

                const remove = document.createElement('div');
                remove.classList.add('remove-button');
                remove.innerHTML = '<div>&#x2715;</div>';
                card.append(remove);

                cardBoxes[i].appendChild(card);
            }
        }
        dragCard();
        removeCard();
    }
}
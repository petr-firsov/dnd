import { activateElement } from "./drag_card_function/activate_element";
import { dropCard } from "./drag_card_function/drop_card";
import { addSpace } from "./drag_card_function/add_space";

export function dragCard() {
    const cards = Array.from(document.getElementsByClassName('card'));
    cards.forEach(card => {
        card.addEventListener('mousedown', activateElement);
        document.documentElement.addEventListener('mouseup', dropCard);
        card.addEventListener('mouseover', addSpace);
    })
}
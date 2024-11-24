import { importCards } from './load_unload/importCards';
import { saveCards } from './load_unload/saveCards';
import { newCardForms } from './newCardForms';
import { cardMovement } from './card_move_function/cardMovement';

export default function app() {
    document.addEventListener('DOMContentLoaded', () => {
        importCards();
        newCardForms();
    });
    cardMovement();
    window.addEventListener('beforeunload', saveCards);
}

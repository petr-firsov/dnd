import { addCard } from './add_card';
import { saveCards } from './save_cards';
import { importCards } from './import_cards';

export function defaultBehaviour() {
    addCard();
    window.addEventListener('beforeunload', saveCards);
    document.addEventListener('DOMContentLoaded', importCards);
}
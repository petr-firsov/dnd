import './index.css';

import { addCard } from './js/add_card';
import { saveCards } from './js/save_cards';
import { importCards } from './js/import_cards';

addCard();
window.addEventListener('beforeunload', saveCards);
document.addEventListener('DOMContentLoaded', importCards);








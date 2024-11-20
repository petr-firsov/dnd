import { cardBoxes } from "./globals";
import { dragCard } from "./drag_card";
import { removeCard } from "./remove_card.";

export function addCard() {
    const addLinks = document.querySelectorAll('.add-link');
    for (let i = 0; i < addLinks.length; i++) {
        addLinks[i].addEventListener('click', (event) => {
            event.target.setAttribute('hidden', '');

            const addCardForm = document.createElement('form');
            addCardForm.classList.add('add-card-form');
            cardBoxes[i].appendChild(addCardForm);

            const newCardInput = document.createElement('textarea');
            newCardInput.setAttribute('placeholder', 'Enter a title for this card...')
            addCardForm.appendChild(newCardInput);
            newCardInput.focus();

            const addButton = document.createElement('button');
            addButton.classList.add('add-button');
            addButton.textContent = 'Add button';
            addCardForm.appendChild(addButton);

            const cancel = document.createElement('div');
            cancel.classList.add('cancel-button');
            cancel.innerHTML = '&#x2715;';
            addCardForm.appendChild(cancel);

            addCardForm.addEventListener('submit', (event) => {
                event.preventDefault();
                if (newCardInput.value) {
                    const newCard = document.createElement('div');
                    newCard.classList.add('card');
                    newCard.innerText = newCardInput.value;
                    
                    const remove = document.createElement('div');
                    remove.classList.add('remove-button');
                    remove.innerHTML = '<div>&#x2715;</div>';
                    newCard.append(remove);
                    
                    cardBoxes[i].appendChild(newCard);
                    dragCard();
                    removeCard();
                }
                addCardForm.remove();
                addLinks[i].removeAttribute('hidden', '');
            });

            cancel.addEventListener('click', () => {
                addCardForm.remove();
                addLinks[i].removeAttribute('hidden', '');
            });
        });
    };
}
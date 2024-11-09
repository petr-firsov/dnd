import './index.css';

const cardBoxes = Array.from(document.querySelectorAll('.card-box'));


// Обращается к cardBoxes и функциям dragCard и removeCard;
function addCard() {
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

                    const cardText = document.createElement('p');
                    cardText.classList.add('card-text');
                    cardText.innerText = newCardInput.value;
                    newCard.appendChild(cardText);
                    
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

addCard();

function dragCard() {
    const cards = Array.from(document.getElementsByClassName('card'));
    cards.forEach(card => card.addEventListener('mousedown', (event) => {
        event.preventDefault();
        let activeElement = event.target;
        activeElement.classList.add('dragged');

        let elementCoordinates = activeElement.getBoundingClientRect();
        let clickY = event.clientY - elementCoordinates.y;
        let clickX = event.clientX - elementCoordinates.x;

        document.documentElement.addEventListener('mouseover', (e) => {
            activeElement.style.top = e.clientY - clickY  + 'px';
            activeElement.style.left = e.clientX - clickX + 'px';
        });

        document.documentElement.addEventListener('mouseover', (e) => {  
            if (e.target.classList.contains('card') && !e.target.classList.contains('dragged')) {
                let siblings = Array.from(e.target.parentElement.children);
                if (siblings.every(sibling => !sibling.classList.contains('space'))) {
                    console.log(siblings);
                    let top = e.target.getBoundingClientRect().top;
                    let bottom = e.target.getBoundingClientRect().bottom;
                    let height = e.target.getBoundingClientRect().height;
                    let middle = top + height/2;
                if (top <= e.clientY <= middle) {
                    let space = document.createElement('div');
                    space.style.width = activeElement.getBoundingClientRect().width + 'px';
                    space.style.height = activeElement.getBoundingClientRect().height + 'px';
                    space.style.backgroundColor = 'lightgrey';
                    space.classList.add('space');
                    e.target.insertAdjacentElement('beforebegin', space);
                } else if (middle < e.clientY <= bottom) {
                    let space = document.createElement('div');
                    space.style.width = activeElement.getBoundingClientRect().width + 'px';
                    space.style.height = activeElement.getBoundingClientRect().height + 'px';
                    space.style.backgroundColor = 'transparent';
                    e.target.insertAdjacentElement('afterend', space);
                }    
            }}
        });

        cards.forEach(card => card.addEventListener('mouseout', () => {
            let blocks = card.parentElement.children;
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].classList.contains('space')) {
                    blocks[i].remove();
                }
            }
        }));
                    
        document.documentElement.addEventListener('mouseup', () => {
            activeElement.classList.remove('dragged');
        });
    }))  
}


function removeCard() {
    const removeBtns = document.querySelectorAll('.remove-button');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', () => {
            removeBtns[i].parentElement.remove();
        })
    }
};

// Обращается к cardBoxes
window.addEventListener('beforeunload', () => {
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
});

// Обращается к dragCard() и removeCard()
document.addEventListener('DOMContentLoaded', () => {
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
});

/*
1. Курсор находится внутри контейнера cardBox.
2. Определить координаты курсора.
3. Определить координаты границ карточек вокруг.
- Получить getBoundingClientRect() верха и низа каждой карточки в контейнере.
- Определить, между верхом и низом каких элементов находится курсор.
4. Определить индекс карточек внутри контейнера cardBox.
5. Создать пустой 'div'.
6. Добавить классу ширину и высоту карточки.
7. Вставить этот div между карточками.
8. По mouseout удалить div. 
*/
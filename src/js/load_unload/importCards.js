export function importCards() {
    const cardBoxes = Array.from(document.querySelectorAll('.card-box'));
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

                const removeBtn = document.createElement('div');
                removeBtn.classList.add('remove-button');
                removeBtn.innerHTML = '<div>&#x2715;</div>';
                card.append(removeBtn);
                removeBtn.addEventListener('click', () => {
                    removeBtn.parentElement.remove();
                });

                cardBoxes[i].appendChild(card);
            }
        }
    }
}
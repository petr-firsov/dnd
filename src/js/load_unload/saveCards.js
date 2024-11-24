export function saveCards() {
    const cardBoxes = Array.from(document.querySelectorAll('.card-box'));
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
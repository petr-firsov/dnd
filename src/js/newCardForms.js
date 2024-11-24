export function newCardForms() {
    const addLinks = document.querySelectorAll('.add-link');
    addLinks.forEach(addLink => addLink.addEventListener('click', event => {
        const targetLink = event.target;
        targetLink.setAttribute('hidden', '');

        const parentColumn = event.target.parentElement;
        parentColumn.insertAdjacentHTML('beforeend', `
            <form class="add-card-form">
                <textarea placeholder="Enter a title for this card..."></textarea>
                <button class="add-button">Add button</button>
                <div class="cancel-button">&#x2715</div>
            </form>
        `);
        const textarea = parentColumn.querySelector('textarea');
        textarea.focus();
        const cancelBtn = parentColumn.querySelector('.cancel-button');
        cancelBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            targetLink.removeAttribute('hidden', '');
        });

        const form = targetLink.parentElement.querySelector('.add-card-form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const targetForm = event.target;
            const cardBox = targetForm.parentElement.querySelector('.card-box');
            const newCardText = targetForm.querySelector('textarea').value;
            cardBox.insertAdjacentHTML('beforeend', `
                <div class="card">
                    ${newCardText}
                    <div class="remove-button"></div>
                </div>
            `);

            let removeBtn = cardBox.lastElementChild.querySelector('.remove-button');
            removeBtn.innerHTML = '<div>&#x2715;</div>';
            removeBtn.addEventListener('click', () => {
                removeBtn.parentElement.remove();
            });

            const targetAddLink = targetForm.parentElement.querySelector('.add-link');
            targetAddLink.removeAttribute('hidden', '');
            targetForm.remove();
        });
    }));
}


export function removeCard() {
    const removeBtns = document.querySelectorAll('.remove-button');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', () => {
            removeBtns[i].parentElement.remove();
        })
    }
};
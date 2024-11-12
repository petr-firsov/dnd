export function dropCard() {
    if (document.querySelector('.dragged')) {
        let activeElement = document.querySelector('.dragged');
        if (document.querySelector('.space')) {
            let space = document.querySelector('.space');
            space.replaceWith(activeElement);
        }
            activeElement.classList.remove('dragged');
            activeElement.style.width = '100%';
            activeElement = undefined;
    }
}
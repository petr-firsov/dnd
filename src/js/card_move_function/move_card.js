export function moveCard() {
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach(card => card.addEventListener('mousedown', (e) => {
        e.preventDefault();

        let activeElement = e.target;
        activeElement.classList.add('dragged');

        let cardBox = e.target.parentElement;
        activeElement.style.width = cardBox.clientWidth - 20 + 'px';

        let elementCoordinates = activeElement.getBoundingClientRect();
        let clickY = e.clientY - elementCoordinates.y;
        let clickX = e.clientX - elementCoordinates.x;

        document.documentElement.addEventListener('mousemove', (e) => {
            if (document.querySelector('.dragged')) {
                let activeElement = document.querySelector('.dragged');
                activeElement.style.top = e.clientY - clickY  + 'px';
                activeElement.style.left = e.clientX - clickX + 'px';
            }
        });

        document.documentElement.addEventListener('mouseup', () => {
            if (document.querySelector('.dragged')) {
                let activeElement = document.querySelector('.dragged');

                if (document.querySelector('.space')) {
                    let space = document.querySelector('.space');
                    space.replaceWith(activeElement);
                }

                activeElement.classList.remove('dragged');
                activeElement.style = undefined;
                activeElement = undefined;
            }});
    }));
}
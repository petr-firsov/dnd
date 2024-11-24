export function addSpaceForMovingCard() {
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach(card => {
            let top = card.getBoundingClientRect().top;
            let bottom = card.getBoundingClientRect().bottom;
            let middle = top + card.getBoundingClientRect().height/2;
            let left = card.getBoundingClientRect().left;
            let right = card.getBoundingClientRect().right
            document.documentElement.addEventListener('mousemove', (e) => { 
                if (document.querySelector('.dragged') && (!card.classList.contains('.dragged'))) {
                    if (top <= e.clientY && e.clientY <= bottom && left <= e.clientX && e.clientX <= right) {

                    if (document.querySelector('.space')) {
                        const space = document.querySelector('.space');
                        space.remove();
                    }

                    let activeElement = document.querySelector('.dragged');
                    let space = document.createElement('div');
                    space.style.width = activeElement.getBoundingClientRect().width + 'px';
                    space.style.height = activeElement.getBoundingClientRect().height + 'px';
                    space.classList.add('space');  

                    if (top <= e.clientY && e.clientY < middle) {
                        card.insertAdjacentElement('beforebegin', space);
                    } else if (middle < e.clientY && e.clientY <= bottom) {
                        card.insertAdjacentElement('afterend', space);
                    }   
            }}});
    });
}
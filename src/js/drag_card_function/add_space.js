export function addSpace(e) {
    if (document.querySelector('.dragged') && (!e.target.classList.contains('dragged'))) {
        if (document.querySelector('.space'))  {
            let space = document.querySelector('.space');
            space.remove();
        }
            let activeElement = document.querySelector('.dragged');
            let space = document.createElement('div');
            space.style.width = activeElement.getBoundingClientRect().width + 'px';
            space.style.height = activeElement.getBoundingClientRect().height + 'px';
            space.classList.add('space');

            let top = e.target.getBoundingClientRect().top;
            let bottom = e.target.getBoundingClientRect().bottom;
            let middle = top + e.target.getBoundingClientRect().height/2;

            if (top <= e.clientY && e.clientY < middle) {
                e.target.insertAdjacentElement('beforebegin', space);
            } else if (middle < e.clientY && e.clientY <= bottom) {
                e.target.insertAdjacentElement('afterend', space);
            }    
    }   
}
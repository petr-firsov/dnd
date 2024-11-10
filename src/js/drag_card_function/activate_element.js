export function activateElement(e) {
    e.preventDefault();
    let activeElement = e.target;
    activeElement.classList.add('dragged');
    let elementCoordinates = activeElement.getBoundingClientRect();
    let clickY = e.clientY - elementCoordinates.y;
    let clickX = e.clientX - elementCoordinates.x;
    document.documentElement.addEventListener('mouseover', (e) => {
        activeElement.style.top = e.clientY - clickY  + 'px';
        activeElement.style.left = e.clientX - clickX + 'px';
    });

}
export function activateElement(e) {
    e.preventDefault();
    let activeElement = e.target;
    activeElement.classList.add('dragged');
    let cardBox = e.target.parentElement;
    activeElement.style.width = cardBox.clientWidth - 20 + 'px';
    console.log(activeElement.style.width)
    let elementCoordinates = activeElement.getBoundingClientRect();
    let clickY = e.clientY - elementCoordinates.y;
    let clickX = e.clientX - elementCoordinates.x;
    document.documentElement.addEventListener('mouseover', (e) => {
        activeElement.style.top = e.clientY - clickY  + 'px';
        activeElement.style.left = e.clientX - clickX + 'px';
    });

}
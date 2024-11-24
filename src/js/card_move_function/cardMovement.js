import { addSpaceForMovingCard } from "./add_space";
import { moveCard } from "./move_card";

export function cardMovement() {
    const whiteboard = document.querySelector('#whiteboard');

    let cardObserver = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue; {
                    if (node.matches('.card')) {
                        moveCard();
                        addSpaceForMovingCard();
                    }
                }
            }

        }
    });
    
    cardObserver.observe(whiteboard, {
        childList: true,
        subtree: true
    });
}


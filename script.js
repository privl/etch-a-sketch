let isMouseDown = false;
createGrid(50, 50);


function createGrid(horizontalNumber, verticalNumber) {

    const vDiv = [];
    const hDiv = [];
    const container = document.querySelector('.container');

    for (let i = 0; i < verticalNumber; i++) {

        vDiv[i] = document.createElement('div');

        for (let j = 0; j < horizontalNumber; j++) {
            hDiv[j] = document.createElement('div');
            hDiv[j].classList.add('grid');
            hDiv[j].addEventListener('mousedown', mouseDown);
            hDiv[j].addEventListener('mouseup', mouseUp);
            hDiv[j].addEventListener('mousemove', mouseMove);
            vDiv[i].append(hDiv[j]);
        }

        container.append(vDiv[i]);
    }
}

function mouseDown(event) {
    isMouseDown = true;
    event.target.classList.add('grid-change');
}

function mouseUp() {
    isMouseDown = false;
}

function mouseMove(event) {
    if (isMouseDown) {
        event.target.classList.add('grid-change');
    }
}
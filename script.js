const container = document.querySelector('.container');
const hGrids = document.querySelector('input[name="hGrids"]');
const vGrids = document.querySelector('input[name="vGrids"]');
const submit = document.querySelector('button[type="button"]');

submit.addEventListener('click', setGrid);

let isMouseDown = false;
document.addEventListener('mouseup', mouseUp);
createGrid(50, 50);

function setGrid() {
    if (Number.isInteger(+hGrids.value) && Number.isInteger(+vGrids.value) &&
        +hGrids.value <= 100 && +vGrids.value <= 100 &&
        +hGrids.value > 0 && +vGrids.value > 0) {

        clearGrid();
        createGrid(hGrids.value, vGrids.value);

    } else {
        hGrids.value = '';
        vGrids.value = '';
        alert('Please input two integer numbers between 1 and 100');
    }
}

function createGrid(horizontalNumber, verticalNumber) {

    const vDiv = [];
    const hDiv = [];

    for (let i = 0; i < verticalNumber; i++) {

        vDiv[i] = document.createElement('div');

        for (let j = 0; j < horizontalNumber; j++) {
            hDiv[j] = document.createElement('div');
            hDiv[j].classList.add('grid');
            hDiv[j].addEventListener('mousedown', mouseDown);
            hDiv[j].addEventListener('mousemove', mouseMove);
            vDiv[i].append(hDiv[j]);
        }

        container.append(vDiv[i]);
    }
}

function mouseDown(event) {
    isMouseDown = true;

    if (event.target.classList.contains('triggered')) {
        return;
    }
    
    addRandomColor(event.target);

    event.target.classList.add('triggered');
}

function mouseUp() {
    isMouseDown = false;
}

function mouseMove(event) {
    if (event.target.classList.contains('triggered')) {
        return;
    }

    if (isMouseDown) {
        addRandomColor(event.target);
        event.target.classList.add('triggered');
    }

}

function addRandomColor(target) {
    let color = 'rgb(' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ')';
    target.style.backgroundColor = color;
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
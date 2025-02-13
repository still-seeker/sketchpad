const container = document.querySelector("#container");

function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        row.style.width = `calc(100% / ${gridSize})`;
        row.style.height = `calc(100% / ${gridSize})`;
        container.appendChild(row);
    }
    container.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains('cell')){
            const cells = e.target;
            cells.style.backgroundColor = "gold";
        };
    });
}

function changeGrid() {
    let num = prompt("Enter a number between 0(exclusive) and 100(inclusive)", "");
    num = Number(num);
    if (num <= 100 && num != null) {
        removeGrid();
        createGrid(num);
    }
    else {
        alert("Input entered is invalid!! \nEnter an Integer(1-100)");
    }
}

function removeGrid(){
    const grid = document.querySelectorAll(".row");
    grid.forEach(row => {
        row.remove();
    })
}

function erase(){
    const grids = document.querySelectorAll(".row");
    while(true){
        grids.addEventListener("mouseover", (e) => {
            if (e.target.classList.contains('cell')){
                const cells = e.target;
                cells.style.backgroundColor = "none";
            };
        });
    }
}

const gridSet = document.querySelector(".gridSet");
gridSet.addEventListener("click", changeGrid);

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", erase);

createGrid(16);

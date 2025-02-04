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
        container.appendChild(row);
    }
    container.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains('cell')){
            const cells = e.target;
            cells.style.backgroundColor = "gold";
        };
    })
}

createGrid(20);
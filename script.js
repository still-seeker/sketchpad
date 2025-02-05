const container = document.querySelector("#container");
const gridSet = document.querySelector(".gridSet");



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
    });
}

createGrid(16);

gridSet.addEventListener("click", (e) => {
    let validInt = false;
    let number;
    while(!validInt)
   {
     let update = prompt("Enter a number of cells to make a grid\nMaximum number is 100");
     if (update === null || update > 100){
        alert("Seems you didnt provide an integer \nOR \nThe Integer is greater than 100");
        break;
     }

     /**convert to integer and validate */
     number = parseInt(update);
     validInt = !isNaN(update) && Number.isInteger(update);
     console.log(validInt);
     if (validInt){
        alert("An Error in input occured");
     }
     
     if (!validInt){
        
        createGrid(update);
     }
    }
    
})

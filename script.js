const container = document.querySelector("div.container");

function createGrid(gridSize) {
    
    document.querySelectorAll("div.grid").forEach(el => el.remove());
    // create grid
    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement("div")
        div.classList.add("grid");
        n = Math.max(1, Math.min(100, Number(gridSize) || 1));
        div.style.flex = `0 0 calc(100% / ${n})`
        container.appendChild(div)
    }
}

createGrid(16);

const button = document.querySelector("button")
button.textContent = "Set Grid Size"
button.addEventListener("click", () => {
    gridSize = prompt("Enter your desired grid Size, e.g. enter 16 for 16 x 16 grids")
    createGrid(gridSize);
    console.log(gridSize)
})

// "hover" effect
// using event delegation
container.addEventListener("mouseover", (e) => {
    const cell = e.target.closest(".grid");
    if (!cell || !container.contains(cell)) return;
    cell.id = "colored";
});

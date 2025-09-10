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
    gridSize = prompt("Enter your desired grid Size (1-100), e.g. enter 16 for 16 x 16 grids")
    if (gridSize >= 100 || gridSize <= 0) {
        alert("Grid size must range from 1 to 100!")
    }
    createGrid(gridSize);
    console.log(gridSize)
})

// "hover" effect
// using event delegation
container.addEventListener("mouseover", (e) => {
    // Find the closest .grid cell from where the event started
    const cell = e.target.closest(".grid");
    // Guard: ensure the cell exists and is inside the container
    if (!cell || !container.contains(cell)) return;
    // Apply a persistent “hovered” style. Prefer class over id.
    cell.classList.add("colored");
});

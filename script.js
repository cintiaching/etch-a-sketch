
const container = document.querySelector("div.container");

// create grid
gridSize = 16
for (let i = 0; i < gridSize*gridSize; i++) {
    const div = document.createElement("div")
    div.classList.add("grid");
    container.appendChild(div)
}

// "hover" effect

const grids = document.querySelectorAll("div.grid");

grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        console.log(grid)
        grid.setAttribute("id", "colored")
    })
})
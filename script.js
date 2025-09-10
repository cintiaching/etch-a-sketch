
const container = document.querySelector("div.container");

gridSize = 16
for (let i = 0; i < gridSize*gridSize; i++) {
    const div = document.createElement("div")
    div.textContent = 1
    div.classList.add("grid");
    container.appendChild(div)
}

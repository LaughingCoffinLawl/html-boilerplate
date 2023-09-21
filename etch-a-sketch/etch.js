const grid = document.querySelector('.grid');
const gridValue = document.querySelector('#gridSizeRange');
const squareSize = 8;
const selectedSize = document.getElementById('submitButton');
const resetButton = document.getElementById('cleanButton');

createGrid(squareSize);

// Create Squared Divs
function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Creat The Grid and append it to grid
function createGrid() {

    const size = gridSizeRange.value;
    grid.innerHTML = '';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid.appendChild(createDiv(grid.clientWidth / size));
    }
  }
}

function updateGridSize() {
    const size = gridSizeRange.value;
    selectedSize.textContent = `${size}x${size}`;
}

// Event listener for the slider input
gridSizeRange.addEventListener('input', updateGridSize);
submitButton.addEventListener('click', createGrid);
resetButton.addEventListener('click', reset);

updateGridSize();
createGrid();

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

// Used event delegation to target children of the grid
grid.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "box" class
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});

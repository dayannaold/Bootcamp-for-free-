const puzzleBoard = document.getElementById('puzzle')
const solveButton = document.getElementById('solve-button')
const squares = 81

for (let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', '0')
    inputElement.setAttribute('max', '9')
    puzzleBoard.appendChild(inputElement)
}
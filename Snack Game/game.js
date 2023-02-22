import { updtae as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'

let lastRenderTime = 0;
const gameBoard = document.getElementsById ('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;

    update()
    draw()
    
}

window.requestAnimationFrame(main);

function update(){
    updateSnake()

}
function draw(){
    drawSnake(gameBoard)

}
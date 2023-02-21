let lastRenderTime = 0;
const SNAKE_SPEED = 2;
function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
   console.log('Render'); 
    lastRenderTime = currentTime;
    
}

window.requestAnimationFrame(main);
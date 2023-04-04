
var Height = 0
var Width = 0

function AdaptingSizeGame() {
	Height = window.innerHeight
	Width = window.innerWidth

	console.log(Height, Width)
}

AdaptingSizeGame()


function randomPosition() {

	var posX = Math.floor(Math.random() * Height) - 90
	var posY = Math.floor(Math.random() * Width) - 90

	posX = posX < 0 ? 0 : posX
	posY = posY < 0 ? 0 : posY

	console.log(posX, posY)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = 'mosquito1'
	mosquito.style.left = posX + 'px'
	mosquito.style.top = posY + 'px'
	mosquito.style.position = 'absolute'

	document.body.appendChild(mosquito)
}


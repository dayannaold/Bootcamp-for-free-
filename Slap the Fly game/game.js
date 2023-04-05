
var Height = 0
var Width = 0

function AdaptingSizeGame() {
	Height = window.innerHeight
	Width = window.innerWidth

	console.log(Height, Width)
}

AdaptingSizeGame()


function randomPosition() {

if (document.getElementById('fly'))
{
document.getElementById('fly').remove()
}


	var posX = Math.floor(Math.random() * Height) - 90
	var posY = Math.floor(Math.random() * Width) - 90

	posX = posX < 0 ? 0 : posX
	posY = posY < 0 ? 0 : posY

	console.log(posX, posY)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = randomSize() + ' ' + randomSide()
	mosquito.style.left = posX + 'px'
	mosquito.style.top = posY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'fly'

	document.body.appendChild(mosquito)

}

function randomSize(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {

			case 0:
				return 'fly1'

			case 1:
				return 'fly2'

			case 2:
				return 'fly3'
	}
}

function randomSide(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {

			case 0:
				return 'sideA'

			case 1:
				return 'sideB'

			case 2:
				return 'fly3'

			case 3:
				return 'sideB'

			case 4:
				return 'fly5'
	}
}

let primeiroNumero = Math.floor(Math.random() * 6) + 1
let segundoNumero = Math.floor(Math.random() * 6) + 1

const image1 = document.querySelector('#player-1')
const image2 = document.querySelector('#player-2')

const img1 = `image/dice${primeiroNumero}.png`
const img2 = `image/dice${segundoNumero}.png`

image1.src = img1
image2.src = img2

const h1 = document.querySelector('h1')

if (primeiroNumero > segundoNumero) {
    h1.innerText = "Player 1 venceu 🏆"
}

else if (segundoNumero === primeiroNumero) {
    h1.innerText = "Empatou!"
}

else {
    h1.innerText = "Player 2 venceu 🏆"
}
let playerOne = prompt("What is your name, Player One?")
document.getElementById('heading').innerHTML = `${playerOne}'s Score: `

let playerTwo = prompt("What is your name, Player Two?")
document.getElementById('heading2').innerHTML = `${playerTwo}'s Score: `

let overallScore = 0;
let image = document.getElementById("diceImage");

document.getElementById('rollDice').addEventListener('click', function () {
    let diceNumber = Math.floor(Math.random() * 6 + 1)
    image.src = `../img/dice${diceNumber}.png`

    if (diceNumber == 1) {
        overallScore = 0
        document.getElementById('heading').innerHTML = `${playerOne}'s Score: ${overallScore}`

    } else if (overallScore >= 50) {
        document.getElementById('heading').innerHTML = `Congrats! You Win ${playerOne}`;
        document.getElementById('rollDice').style.visibility = "hidden";

    } else {
        overallScore = overallScore + diceNumber
        document.getElementById('heading').innerHTML = `${playerOne}'s Score: ${overallScore}`
    }
})


let overallScore2 = 0;
let image2 = document.getElementById("diceImage2");

document.getElementById('rollDice2').addEventListener('click', function () {
    let diceNumber2 = Math.floor(Math.random() * 6 + 1)
    image2.src = `../img/dice${diceNumber2}.png`

    if (diceNumber2 == 1) {
        overallScore2 = 0
        document.getElementById('heading2').innerHTML = `${playerTwo}'s Score: ${overallScore2}`

    } else if (overallScore2 >= 50) {
        document.getElementById('heading2').innerHTML = `Congrats! You Win ${playerTwo}`
        document.getElementById('rollDice2').style.visibility = "hidden";

    } else {
        overallScore2 = overallScore2 + diceNumber2
        document.getElementById('heading2').innerHTML = `${playerTwo}'s Score: ${overallScore2}`
    }
})
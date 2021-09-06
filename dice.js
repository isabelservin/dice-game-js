//generate random roll with num of sides and inclusive of 1
const randomRoll = (min, sides) =>{
  return Math.round(Math.random() * sides + min)
}

let rollAgain
let min = 1
let numOfSides = parseInt(prompt("How many sides does your dice have?"))
let timesRolled = parseInt(prompt("How many times would you like to roll your pair of dice?"))

//determine results
const roll = () => {
    let d1 = randomRoll(min, numOfSides)
    let d2 = randomRoll(min, numOfSides)
    let total = d1 + d2
    let result = console.log(`You rolled ${d1} and a ${d2}. Total: ${total}`)
    return result
}

//re-roll
do{
    for(let counter = 1; counter <= timesRolled; counter++){
        roll()
    }
    rollAgain = prompt("Would you like to roll again? (Y/N)")
} while (rollAgain === "Y" || rollAgain === "y")

const tabRand = ["pierre","papier","ciseaux"]

let userScore = 0
let compScore = 0

let buttonValidator = document.getElementById("button")

buttonValidator.addEventListener("click",function(){
    let randNum = Math.floor(Math.random()*3)
    let userChoice = document.getElementById("userChoice").value;
    console.log(tabRand[userChoice]);
    console.log(tabRand[randNum]);

    if (userChoice == randNum) {
        console.log("Egalité");
    } else if (userChoice == 0 && randNum == 2 || userChoice == 1 && randNum == 0 || userChoice == 2 && randNum == 0){
        console.log("victoire")
        userScore ++
    }
else {
    console.log("Défaite");
    compScore ++
}
console.log(`Le score est de ${userScore} a ${compScore} !!`)
} )
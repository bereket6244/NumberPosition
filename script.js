
const guessGrid = document.querySelector("[data-guess-grid]")
let gues = document.getElementsByClassName('guess')
let first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')
var fourth = document.getElementById('fourth')
const delt = document.getElementsByClassName("red")
const entt = document.getElementsByClassName("green")
// Stores the digits of the random number generated
var ranNum = []
// stores the amount of correct digits in your guess compared to the random number generated
var correctNumber = 0
// stores the amount of digits that are in correct position in you guess 
var correctPosition = 0
// Counts the amount of turns you took starting from 0
var triedAmount = 0
// loads when the page is opened and refreshed. it creates the first set of squares in the history tab and generates a ran num 
document.addEventListener('DOMContentLoaded', () => {
    createSquares();
    generateRandomNumber();
})

startInteraction() 
// creates the squares in the history gives them the classes "guess" and ("cat" + i) where i is 
// used to differentiate between all 6 of the squares formed for 
// later use section taken from "https://youtu.be/j7OhcuZQ-q8?t=399"
function createSquares () {
    const gameBoard = document.getElementById('board')
     for (let i = 1; i <= 6; i++) {
        let square = document.createElement('div')
        square.classList.add("guess")
        square.classList.add("cat" + i.toString())
        for (let j = 5 ; j <= 6 + (triedAmount*6); j = j+6) {
            if (j === i ){
                square.classList.add("estimate")
            }
        }
        if (i >=6 && i%6 === 0){
            square.classList.add("estimate")
        }
        gameBoard.appendChild(square)
    }
}
// loads when the page first loads and then waits for input taken from "https://youtu.be/Wak7iN4JZzU" upuntil the handleKeypress function
function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
}
function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}
function handleMouseClick(e) {
    if (e.target.matches("[data-enter]")){
        submitGuess()
        return
    }
    if (e.target.matches("[data-delete]")){
        deleteKey()
        return
    }
    if (e.target.matches("[data-key]")){
        pressKey(e.target.dataset.key)
        return
    }

    
}
function handleKeyPress(e) {
    if (e.key === "Enter") {
        submitGuess()
        return
    }

    if (e.key === "Backspace" || e.key === "Delete") {
        deleteKey()
        return
    }

    if (e.key.match(/^[0-9]/)){
        pressKey(e.key)
        return
    }
}

//for input keys: lets user input data to the guessing squares and adds the class name active for said guessing square 
function pressKey(key) {
    for (let i = 0; i < 4; i++) {
        if ( document.getElementsByClassName('guess')[i].classList[1] !== "active"){
            document.getElementsByClassName('guess')[i].innerHTML = key;
            document.getElementsByClassName('guess')[i].classList.add("active")
            break
        }  
    } 
}

//for delete key: lets user delete data from the guessing squares and removes the class name active for said guessing square
function deleteKey(){
     for (i = 3; i >= 0; i--) {
        if (document.getElementsByClassName('guess')[i].classList[1] === "active"){
            document.getElementsByClassName('guess')[i].innerHTML = "";
            document.getElementsByClassName('guess')[i].classList.remove("active")
            break
        }
    }  
}

 // generates four non-similar random number and stores them in ranNum[]
function generateRandomNumber(){
    ranNum[0] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum [0] === "0"){
    ranNum[0] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[1] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[1] === ranNum[0]){
    ranNum[1] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[2] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[2] === ranNum [0] || ranNum[2] === ranNum[1]){
    ranNum[2] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[3] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[3] === ranNum[0]||ranNum[3] === ranNum[1]||ranNum[3] === ranNum[2]){
    ranNum[3] = (Math.floor(Math.random() * 10)).toString()
    }
    
}

// for enter key: lets user submit the guess to run checkNumPresence and then resents correctNumber & correctPosition for next guess
function submitGuess() {
    checkNumPresence();
    correctNumber = 0
    correctPosition = 0
}

// checks how many numbers match and how many of them are in the correct position
function checkNumPresence() {
    //starting from this till the next if statement: checks to see the correct orientation of numbers is entered from user
    if ( first.innerHTML === second.innerHTML || first.innerHTML=== third.innerHTML || first.innerHTML === fourth.innerHTML ||
        second.innerHTML === third.innerHTML || second.innerHTML === fourth.innerHTML||
        third.innerHTML === fourth.innerHTML){
            alert("you cant input the same digit twice")
        }
        else if (first.innerHTML === "" || second.innerHTML === "" || third.innerHTML === "" || fourth.innerHTML === ""){
            alert("input all fields homie")
        }
        else {
            let n1 = first.innerHTML.toString()
            let n2 = second.innerHTML.toString()
            let n3 = third.innerHTML.toString()
            let n4 = fourth.innerHTML.toString()
    // counts the amount of correct numbers and correct positions. taken from Brook Feleke(ETS0184/12, AASTU)        
    if (first.innerHTML !== ""  && second.innerHTML !== ""&& third.innerHTML !== ""&& fourth.innerHTML !== ""){
     for (let j = 0; j <= 3; j++) {
         for (let i = 0; i <= 3; i++) {
             if (document.getElementsByClassName('guess')[j].innerText === ranNum[i]){
                 correctNumber++
                 if(j === i){
                     correctPosition++
                    }
                }
            }
        }

        // Converts the amount of correct numbers and correct positions to string 
        let nn = correctNumber.toString()
        let np = correctPosition.toString()
        // the for loop below gets the number the user has 
        //input("n" + i)(where i is an integer from 1-4), amount of correct numbers and 
        // the amount of correct positions and assigns them to the empty 
        // divs that were assigned 6 ("cat" + i)(where i is an integer form 1-6) classes  
        for (let k = triedAmount; k <= triedAmount ; k++) {
        let abv = document.getElementsByClassName("cat1")[k]
        let bbv = document.getElementsByClassName("cat2")[k]
        let cbv = document.getElementsByClassName("cat3")[k]
        let dbv = document.getElementsByClassName("cat4")[k]
        let ebv = document.getElementsByClassName("cat5")[k]
        let fbv = document.getElementsByClassName("cat6")[k]
        abv.innerHTML = n1
        bbv.innerHTML = n2
        cbv.innerHTML = n3
        dbv.innerHTML = n4
        ebv.innerHTML = nn
        fbv.innerHTML = np   
        }
        // if the correct number of guesses and number of position is not found. this
        //creates the next set of squares in the history tab and emptys out
        // the user input field and removes the class name "active" that
        // was given when the user submitted his/her previous guess. 
        if (correctNumber !==4 || correctPosition !==4 ) {
            triedAmount++
            createSquares(); 
            first.innerHTML = ""
            first.classList.remove("active")
            second.innerHTML = ""
            second.classList.remove("active")
            third.innerHTML = ""
            third.classList.remove("active")
            fourth.innerHTML = ""
            fourth.classList.remove("active")
        }
        // outputs message for the winner and the amount of tries it took them
        if (correctNumber === 4 && correctPosition === 4){
            alert("yasss, slayy. Took you " + triedAmount + " plus 1 number of tries")
            stopInteraction()   
            }
        }        
}      
}
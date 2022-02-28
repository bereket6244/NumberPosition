
let firsth = document.getElementById("firsth")
let secondh = document.getElementById("secondh")
let thirdh = document.getElementById("thirdh")
let fourthh = document.getElementById("fourthh")
let numberh = document.getElementById("numberh")
let positionh = document.getElementById("positionh")
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let fourth = document.getElementById("fourth")
// let history = document.getElementsByClassName("history")
let correctPosition = 0
let correctNumber = 0
let triedAmount = 1
let ranNum = []
// let actialNum


/* runs the functions that make the first rows of 
squares in the hisory section, activates the 
click and keyboard listeneres and generates a random 
four digit number when first loaded*/
document.addEventListener('DOMContentLoaded', () => {
    createSquares();
    startInteraction();
    generateRandomNumber();
})

//generates a random four digit number with no digit being similar
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
    //  actialNum = (ranNum[0].parseint()*1000) + (ranNum[1].parseint()*100) + (ranNum[2].parseint()*10) + (ranNum[3].parseint())
}

// creates the squares when you submit a guess and once when you load the page
function createSquares() {
    const gameBoard = document.getElementById('board')
     for (let i = 1; i <= 6; i++) {
        let square = document.createElement('div')
        square.classList.add("guessed")
        square.classList.add("history-square")
        square.classList.add("cat" + i.toString())
        for (let j = 5 ; j <= 6 + (triedAmount* 6); j = j+6) {
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

/* loads when the page first loads and then waits for input
 taken from "https://youtu.be/Wak7iN4JZzU" 
upuntil the handleKeypress function*/
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
    if (e.target.matches("[data-history]")){
        pressHistory()
        return
    }
    if(e.target.matches("[data-back]")){
        pressBack()
        return
    }
    if(e.target.matches("[data-restart]")){
        pressRestart()
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

    if (e.key === "h" || e.key === "H"){
        pressHistory()
        return
    }
    if (e.key === "b" || e.key === "B") {
        pressBack()
        return
    }
    if (e.key ==="r" || e.key === "R"){
        pressRestart()
        return
    }
    if(e.key === "t" || e.key ==="T" || e.key === "Escape"){
        pressToggle()
        return
    }
}

/*for input keys: lets user input data to the guessing squares and adds the class 
name active for said guessing square*/
function pressKey(key) {
    for (let i = 0; i < 6; i++) {
        if ( document.getElementsByClassName('guess')[i].classList[2] !== "active"){
            document.getElementsByClassName('guess')[i].innerHTML = key;
            document.getElementsByClassName('guess')[i].classList.add("active")
            break
                }  
            } 
}

/*for delete key: lets user delete data from the guessing squares and removes the 
class name active for said guessing square*/
function deleteKey(){
     for (i = 3; i >= 0; i--) {
        if (document.getElementsByClassName('guess')[i].classList[2] === "active"){
            document.getElementsByClassName('guess')[i].innerHTML = "";
            document.getElementsByClassName('guess')[i].classList.remove("active")
            break
        }
    }  
}
 
// history button function nothing assigned to it yet
function pressHistory(){
    document.getElementById("gam").classList.add("active")  
    document.getElementById("his").classList.remove("active") 
}

function pressBack(){
    document.getElementById("his").classList.add("active") 
    document.getElementById("gam").classList.remove("active") 
}

function pressToggle() {
    document.getElementById("his").classList.toggle("active")
    document.getElementById("gam").classList.toggle("active")
}
function pressRestart() {
    alert("The number was " + ranNum)
    location.reload()
}


// the function that runs when you press enter
function submitGuess(){
    checkNumPresence();
    correctNumber = 0
    correctPosition = 0
     }

function checkNumPresence() {
    /*starting from this till the next if statement: checks to see the correct 
    orientation of numbers is entered from user*/
            if(first.innerHTML === second.innerHTML || first.innerHTML=== third.innerHTML || first.innerHTML === fourth.innerHTML ||
          second.innerHTML === third.innerHTML || second.innerHTML === fourth.innerHTML||
          third.innerHTML === fourth.innerHTML){
              if (first.innerHTML === "" && second.innerHTML === "" && third.innerHTML=== "" && fourth.innerHTML=== ""){
                  alert("All fields are empty")
              }
              else if(first.innerHTML === "" || second.innerHTML === "" || third.innerHTML=== "" || fourth.innerHTML=== ""){
                  alert("Fill all fields")
              }
              else{
                alert("you cant input the same digit twice")
              }
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
        /* the for loop below gets the number the user has 
        input("n" + i)(where i is an integer from 1-4), amount of correct numbers and 
         the amount of correct positions and assigns them to the empty 
         divs that were assigned 6 ("cat" + i)(where i is an integer form 1-6) classes */ 
        for (let k = triedAmount - 1; k <= triedAmount - 1 ; k++) {
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
        firsth.innerHTML = n1   
        secondh.innerHTML = n2 
        thirdh.innerHTML = n3   
        fourthh.innerHTML = n4   
        numberh.innerHTML = nn   
        positionh.innerHTML = np   
        }
        
        /* if the correct number of guesses and number of position is not found. this
         creates the next set of squares in the history tab and emptys out
         the user input field and removes the class name "active" that
         was given when the user submitted his/her previous guess.*/ 
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
            alert("yasss, slayy. Took you " + triedAmount + " number of tries")
            stopInteraction()   
            }
        }        
}   
}

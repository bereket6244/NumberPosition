
const guessGrid = document.querySelector("[data-guess-grid]")
let gues = document.getElementsByClassName('guess')
let first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')
var fourth = document.getElementById('fourth')
const delt = document.getElementsByClassName("red")
const entt = document.getElementsByClassName("green")
var num = []
var numt = 0
var pos = 0
var s = 0
document.addEventListener('DOMContentLoaded', () => {
    createSquares();
    generateRandomNumber();
})
function createSquares () {
    const gameBoard = document.getElementById('board')
     for (let i = 1; i <= 6; i++) {
        let square = document.createElement('div')
        square.classList.add("guess")
        square.classList.add("cat" + i.toString())
        for (let j = 5 ; j <= 6 + (s*6); j = j+6) {
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
startInteraction()
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

function pressKey(key) {
    for (let i = 0; i < 4; i++) {
        if ( document.getElementsByClassName('guess')[i].classList[1] !== "active"){
            document.getElementsByClassName('guess')[i].innerHTML = key;
            document.getElementsByClassName('guess')[i].classList.add("active")
            break
        }  
    } 
}

function deleteKey(){
     for (i = 3; i >= 0; i--) {
        if (document.getElementsByClassName('guess')[i].classList[1] === "active"){
            document.getElementsByClassName('guess')[i].innerHTML = "";
            document.getElementsByClassName('guess')[i].classList.remove("active")
            break
        }
    }  
}

function generateRandomNumber(){
    num[0] = (Math.floor(Math.random() * 10)).toString()
    while(num [0] === "0"){
    num[0] = (Math.floor(Math.random() * 10)).toString()
    }
    num[1] = (Math.floor(Math.random() * 10)).toString()
    while(num[1] === num[0]){
    num[1] = (Math.floor(Math.random() * 10)).toString()
    }
    num[2] = (Math.floor(Math.random() * 10)).toString()
    while(num[2] === num [0] || num[2] === num[1]){
    num[2] = (Math.floor(Math.random() * 10)).toString()
    }
    num[3] = (Math.floor(Math.random() * 10)).toString()
    while(num[3] === num[0]||num[3] === num[1]||num[3] === num[2]){
    num[3] = (Math.floor(Math.random() * 10)).toString()
    }
    
}
function submitGuess() {
    checkNumPresence();
    numt = 0
    pos = 0
}
function checkNumPresence() {
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
            
    if (first.innerHTML !== ""  && second.innerHTML !== ""&& third.innerHTML !== ""&& fourth.innerHTML !== ""){
     for (let j = 0; j <= 3; j++) {
         for (let i = 0; i <= 3; i++) {
             if (document.getElementsByClassName('guess')[j].innerText === num[i]){
                 numt++
                 if(j === i){
                     pos++
                    }
                }
            }
        }
        let nn = numt.toString()
        let np = pos.toString()
        
        for (let k = s; k <= s ; k++) {
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
        if (numt !==4 || pos !==4 ) {
            s++
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
        if (numt === 4 && pos === 4){
            alert("yasss, slayy. Took you " + s + " plus 1 number of tries")
            stopInteraction()
                
                
            }
        }
    else {
    }
            
}      
}
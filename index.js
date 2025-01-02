let input; // user input
let max = 100;
let min = 1;
let count = 0; // number of tries

let cnt = document.getElementById("cnt"); // for printing the number of tries on screen , getting the html id for count
let res = document.getElementById("result"); // for printing the result
let isDone = false; // game state
let ch;

// random number generator
function random(){
    ch = Math.floor(Math.random() * (max - min + 1)) + min; // getting a random number
    console.log(ch);
}
// main logic
function guess(num){
    if(isDone){
        res.textContent = "You Already Guessed it Correctly!";
        res.style.color = "green"; // You guessed correctly color
    }
    else if(num == ch){
        res.textContent = "You Guessed it Correctly!";
        res.style.color = "green";
        count++;
        cnt.textContent = count;
        isDone = true;
    }
    else if(Math.abs(num-ch) <= 10){
        res.textContent = "You're Hot!";
        count++
        cnt.textContent = count;
    }
    else{
        res.textContent = "You're Cold!";
        count++
        cnt.textContent = count;  
    }
}
// function for restarting the game
function restartGame(){
    res.style.color = "black"; 
    count = 0; // reset the count
    isDone = false; // reset the game state
    cnt.textContent = count; // reset the displayed count
    res.textContent = "Make a guess!"; // reset the result message
    random(); // generate a new random number
    document.getElementById("Text").value = ""; // clear the input field
}

//Check button function
random();
document.getElementById("checkBtn").onclick = function(){
    
    input = document.getElementById("Text").value;
    input = Number(input);

    if(!isNaN(input) && input >= min && input <= max) {
        guess(input); // make the guess
    } else {
        res.textContent = "Please enter a number between " + min + " and " + max + ".";
    }
}
document.getElementById("restartBtn").onclick = function(){
    restartGame();
}
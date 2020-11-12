// console.log("hello");
const submitButton = document.getElementById("submit");
console.log(submitButton);
const message = document.getElementById("message");
const lives =document.getElementById("lives");

// Math.random will generate random number between 0 and 1
var guessNumber = Math.round(Math.random() * 100);
// console.log(guessNumber);
var text;
var live = 10;

submitButton.onclick = ()=>{
    console.log(guessNumber);
    let userInput = document.getElementById("number-input").value;
    live--;
    if(userInput == guessNumber){
        location.href = "./win.html";
    }
    else if(live == 0){
        location.href = "./lose.html";
    }
    else if(userInput > guessNumber){
        text = `oops! Your guess is too high. You have ${live} lives remaining.`;
    }
    else if(userInput < guessNumber){
        text = `oops! Your guess is too low'. You have ${live} lives remaining.`;
    }
message.style.display = "inherit";
message.innerHTML = text;
lives.innerHTML = live;
}

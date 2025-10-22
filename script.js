
let homeScore = 0;
let awayScore = 0;
let homeFouls = 0;
let awayFouls = 0;
let homeTo = 0;
let awayTo = 0;
let period = 0;
let timee = "12:00";
let timeInSeconds = 720; // 12 minutes = 720 seconds
let timerInterval = null; // To store the interval ID

document.getElementById("home-score").textContent = homeScore;
document.getElementById("away-score").textContent = awayScore;
document.getElementById("home-fouls").textContent = homeFouls;
document.getElementById("away-fouls").textContent = awayFouls;
document.getElementById("home-to").textContent = homeTo;
document.getElementById("away-to").textContent = awayTo;
document.getElementById("period").textContent = period;
document.getElementById("timee").textContent = timee;

function homeAdd1(){
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore; winnerHighlight();
}
function homeAdd2(){
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore; winnerHighlight();
}
function homeAdd3(){
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore; winnerHighlight();
}
function homeReset(){
    homeScore = 0;
    document.getElementById("home-score").textContent = homeScore; winnerHighlight();
}
function homeFoulAdd(){
    homeFouls += 1;
    document.getElementById("home-fouls").textContent = homeFouls;
}
function homeFoulReset(){
    homeFouls = 0
    document.getElementById("home-fouls").textContent = homeFouls;
}
function homeToAdd(){
    homeTo += 1
    document.getElementById("home-to").textContent = homeTo;
}
function homeToMinus(){
    homeTo -= 1
    document.getElementById("home-to").textContent = homeTo;
}


function awayAdd1(){
    awayScore += 1;
    document.getElementById("away-score").textContent = awayScore; winnerHighlight();
}
function awayAdd2(){
    awayScore += 2;
    document.getElementById("away-score").textContent = awayScore; winnerHighlight();
}
function awayAdd3(){
    awayScore += 3;
    document.getElementById("away-score").textContent = awayScore; winnerHighlight();
}
function awayReset(){
    awayScore = 0;
    document.getElementById("away-score").textContent = awayScore; winnerHighlight();
}
function awayFoulAdd(){
    awayFouls += 1;
    document.getElementById("away-fouls").textContent = awayFouls;
}
function awayFoulReset(){
    awayFouls = 0
    document.getElementById("away-fouls").textContent = awayFouls;
}
function awayToAdd(){
    awayTo += 1
    document.getElementById("away-to").textContent = awayTo;
}
function awayToMinus(){
    awayTo -= 1
    document.getElementById("away-to").textContent = awayTo;
}

function addPeriod(){
    period += 1
    document.getElementById("period").textContent = period;
}
function minusPeriod(){
    period -= 1
    document.getElementById("period").textContent = period;
}

function winnerHighlight(){
    const homeScoreElement = document.getElementById("home-score");
    const awayScoreElement = document.getElementById("away-score");
    
    if (homeScore > awayScore) {
        homeScoreElement.style.color = "#5CECFF";
        awayScoreElement.style.color = ""; 
    } else if (awayScore > homeScore) {
        awayScoreElement.style.color = "#5CECFF";
        homeScoreElement.style.color = "";
    } else if (homeScore == awayScore) {
        homeScoreElement.style.color = "#5CECFF";
         awayScoreElement.style.color = "#5CECFF";
    } else {
        homeScoreElement.style.color = "";
        awayScoreElement.style.color = "";
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimee() {
    if (timerInterval !== null) return;
    
    timerInterval = setInterval(() => {
        if (timeInSeconds > 0) {
            timeInSeconds--;
            timee = formatTime(timeInSeconds);
            document.getElementById("timee").textContent = timee;
        } else {
            stopTimee(); 
        }
    }, 1000);
}

function stopTimee() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimee() {
    stopTimee(); 
    timeInSeconds = 720;
    timee = "12:00";
    document.getElementById("timee").textContent = timee;
}
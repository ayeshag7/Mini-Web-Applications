function incrementScoreTeam (elementID, increment) {
    let score = parseInt(document.getElementById(elementID).textContent);
    let updated_score = score + increment;
    document.getElementById(elementID).textContent = updated_score.toString();
}

document.getElementById("team-1-button-1").onclick = function () { incrementScoreTeam("team-1-p-2", 1); };
document.getElementById("team-1-button-2").onclick = function () { incrementScoreTeam("team-1-p-2", 2); };
document.getElementById("team-1-button-3").onclick = function () { incrementScoreTeam("team-1-p-2", 3); };

document.getElementById("team-2-button-1").onclick = function () { incrementScoreTeam("team-2-p-2", 1); };
document.getElementById("team-2-button-2").onclick = function () { incrementScoreTeam("team-2-p-2", 2); };
document.getElementById("team-2-button-3").onclick = function () { incrementScoreTeam("team-2-p-2", 3); };

function announceWinner() {
    let score1 = parseInt(document.getElementById("team-1-p-2").textContent);
    let score2 = parseInt(document.getElementById("team-2-p-2").textContent);
    let result = document.getElementById("announce-result");
  
    if (score1 > score2) {
      result.textContent = "Home has won!";
    } else if (score2 > score1) {
      result.textContent = "Guest has won!";
    } else {
      result.textContent = "Game has drawn!";
    }
    result.classList.remove("announce-result");
    result.classList.add("announced-result");
  }

// Implementing Digital Clock.
let min1 = document.getElementById("min-1");
  let min2 = document.getElementById("min-2");
  let sec1 = document.getElementById("sec-1");
  let sec2 = document.getElementById("sec-2");
  let interval;
  let minutes = 0;
  let seconds = 0;
  let started = false;
  let startTime;

  document.getElementById("starting-button").addEventListener("click", function() {
    if (!started) {
      started = true;

      startTime = new Date();

      interval = setInterval(function() {
        seconds++;
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        if (minutes === 2) {
          clearInterval(interval);
        }
        min1.textContent = Math.floor(minutes / 10);
        min2.textContent = minutes % 10;
        sec1.textContent = Math.floor(seconds / 10);
        sec2.textContent = seconds % 10;

        let currentTime = new Date();
        let duration = 2 * 60 * 1000;
        if (currentTime - startTime >= duration) {
            clearInterval(interval);
            announceWinner();
        }
      }, 1000);
    }
  });

  document.getElementById("reset-button").addEventListener("click", function() {
    clearInterval(interval);
    started = false;
    min1.textContent = 0;
    min2.textContent = 0;
    sec1.textContent = 0;
    sec2.textContent = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("team-1-p-2").textContent = 0;
    document.getElementById("team-2-p-2").textContent = 0;
    document.getElementById("announce-result").classList.remove("announced-result");
    document.getElementById("announce-result").classList.add("announce-result");
  });
  
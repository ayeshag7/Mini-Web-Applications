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

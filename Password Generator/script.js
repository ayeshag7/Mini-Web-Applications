const charactersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate_password () {
    let password = "";
    let randomIndex;
    let randomCharacter;
    for (let i=0; i<15; i++) {
        randomIndex = Math.floor(Math.random() * charactersArray.length);
        randomCharacter = charactersArray[randomIndex];
        password += randomCharacter;
    }
    return password;
}

let generate_button = document.getElementById("button-1");

generate_button.addEventListener("click", function () {
    let generated_password = generate_password();

    document.getElementById("password").textContent = generated_password;

    document.getElementById("password-div").classList.remove("hidden");
    document.getElementById("password").classList.remove("hidden");
    document.getElementById("password-div").classList.add("password-div");
    document.getElementById("password").classList.add("generated-password");
});
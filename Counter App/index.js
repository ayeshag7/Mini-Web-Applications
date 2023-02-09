function increment_count () {
    let current_count = parseInt(document.getElementById("count").textContent);
    let new_count = current_count + 1;
    document.getElementById("count").textContent = new_count;
}

let increment_button = document.getElementById("increment-button");
increment_button.onclick = increment_count;

const previous_counts = [];

const save_count = () => {
    if (previous_counts.length > 5) {
        previous_counts.length = 0;
    } else {
        previous_counts.push(parseInt(document.getElementById("count").textContent));
    }
};

const save_button = document.getElementById("save-button");

save_button.addEventListener("click", function () {
    save_count();
    save_button.innerHTML = "Saved!";
    save_button.classList.remove("button2");
    save_button.classList.add("saved");
    setTimeout(function () {
        save_button.innerHTML = "Save Count";
        save_button.classList.remove("saved");
        save_button.classList.add("button2");
    }, 1000);
});

function reset_count () {
    document.getElementById("count").textContent = 0;
};

let reset_button = document.getElementById("reset-button");
reset_button.onclick = reset_count;

let display_button = document.getElementById("display-button");
let countsDisplayed = false;

function load_counts () {
    let counts_to_load = document.getElementById("previous-counts");
    if (previous_counts.length === 0) {
        counts_to_load.textContent = "No counts saved yet!"
    } else {
        counts_to_load.textContent = previous_counts.join("- ");
    }
}

display_button.addEventListener("click", function () {
    if (countsDisplayed === false) {
        display_button.innerHTML = "Hide Previous Counts";
        load_counts();
        let hidden_div = document.getElementById("counts-to-display");
        let hidden_counts = document.getElementById("previous-counts");
        hidden_div.classList.remove("counts");
        hidden_div.classList.add("counts-displayed");
        hidden_counts.classList.remove("counts");
        hidden_counts.classList.add("counts-displayed");
        countsDisplayed = true;
    } else {
        display_button.innerHTML = "Display Previous Counts";
        let hidden_div = document.getElementById("counts-to-display");
        hidden_div.classList.remove("counts-displayed");
        hidden_div.classList.add("counts");
        hidden_counts.classList.remove("counts");
        hidden_counts.classList.add("counts-displayed");
        countsDisplayed = false;
    }
});

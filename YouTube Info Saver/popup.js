const saveButton = document.getElementById("save-info");
const displayButton = document.getElementById("display-info");
const message = document.getElementById("message");


chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
  
    if (currentTab.url.includes("https://www.youtube.com/watch")) {
  
      saveButton.classList.remove("hidden");
      saveButton.classList.add("display-button");

      displayButton.classList.remove("hidden");
      displayButton.classList.add("display-button");
  
    } else {

      message.classList.remove("hidden");
      message.classList.add("message");

    }
  });


saveButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

        chrome.tabs.sendMessage(tabs[0].id, { action: "saveInfo" })
    
      });
});

displayButton.addEventListener("click", function () {
  chrome.storage.local.get(null, function (result) {
    var list = document.getElementById("data-list");
    for (var key in result) {
      var item = document.createElement("li");
      item.innerHTML = "<b>" + result[key].videoTitle + "</b> by " + result[key].creatorName;
      list.appendChild(item);
    }
  });
});
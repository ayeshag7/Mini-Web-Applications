(() => {

    let videoId;
    let videoTitle;
    let creatorName;

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "GET_VIDEO_INFO") {
          videoId = message.videoId;
          videoTitle = document.querySelector("h1.style-scope.ytd-watch-metadata yt-formatted-string").innerText;
          creatorName = document.querySelector("div.ytd-channel-name a").innerText;
          
        }
      });

    
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "saveInfo") {
            chrome.storage.local.set({ [videoId]: { videoTitle, creatorName } });
        }
      });


})();

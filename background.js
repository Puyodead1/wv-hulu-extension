chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: chrome.extension.getURL("app.js"),
    };
  },
  {
    urls: ["https://player.hulu.com/site/dash/*-site-curiosity/js/app.js"],
  },
  ["blocking"]
);

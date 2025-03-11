chrome.runtime.onMessage.addListener(function (e, n, s) {
  console.log("Message received in content script:", e),
    s({ status: "Message received in content script" });
}),
  console.log("Content script loaded.");

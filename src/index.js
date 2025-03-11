chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received in content script:", request);
    sendResponse({ status: "Message received in content script" });
  });
  console.log("Content script loaded.");
  
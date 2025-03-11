chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("*************************", request);
  sendResponse({ status: "message received in content script" });
});

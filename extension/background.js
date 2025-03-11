chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in background script:", message);
  if (message.action === "sendMessageToTab") {
    chrome.tabs.sendMessage(message.tabId, message.payload, (response) => {
      sendResponse(response);
    });
    return true; // Indicates that the response will be sent asynchronously
  }
  sendResponse({ status: "received" });
});

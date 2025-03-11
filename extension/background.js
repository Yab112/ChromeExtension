chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in background script:", message);
  
    if (message.action === "sendMessageToTab") {
      chrome.scripting.executeScript(
        {
          target: { tabId: message.tabId },
          files: ["content.js"],
        },
        () => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          } else {
            console.log("Content script injected.");
            chrome.tabs.sendMessage(message.tabId, message.payload, (response) => {
              sendResponse(response);
            });
          }
        }
      );
      return true; // Required to keep the sendResponse callback alive
    }
  
    sendResponse({ status: "received" });
  });
  
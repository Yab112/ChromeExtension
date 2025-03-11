chrome.runtime.onMessage.addListener(function (e, n, s) {
  console.log("*************************", e),
    s({ status: "message received in content script" });
});
//# sourceMappingURL=content.js.map

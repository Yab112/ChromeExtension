console.log("hello yabibal!");

const btnprompt = document.getElementById("btn-prompt");
const btnrender = document.getElementById("btn-render");

async function getCurrentTab() {
    try {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      if (!tab) throw new Error("No active tab found.");
      return tab;
    } catch (error) {
      console.error("Error getting current tab:", error);
    }
  }
  

btnprompt.addEventListener("click", async () => {
  let currentTab = await getCurrentTab();
  console.log("currentTab", currentTab);
  chrome.runtime.sendMessage(
    {
      action: "sendMessageToTab",
      tabId: currentTab.id,
      payload: { greeting: "hello" },
    },
    (response) => {
      console.log(response);
    }
  );
});

btnrender.addEventListener("click", () => {
  console.log("btnrender clicked!");
});

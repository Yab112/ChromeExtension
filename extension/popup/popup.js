console.log("hello yabibal!");

const btnprompt = document.getElementById("btn-prompt");
const btnrender = document.getElementById("btn-render");

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
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
  console.log("btnprompt clicked!");
});

btnrender.addEventListener("click", () => {
  console.log("btnrender clicked!");
});

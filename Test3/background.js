chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.alarms.create("myAlarm", {delayInMinutes: 0.1});
  /*This effectively does work. HOWEVER: It also produces a runtime error
  runtime.lastError because there is no tab with the specific given ID that it's
  looking for */
  });

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.tabs.query({currentWindow: true}, function(tabs/*array of all tabs in current window*/) {
    chrome.tabs.remove(tabs[0].id);//This removes the leftmost tab
  });
});

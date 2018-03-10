var recentActiveTabs = [];

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.alarms.create("myAlarm", {delayInMinutes: 0.2});
  /*This effectively does work. HOWEVER: It also produces a runtime error
  runtime.lastError because there is no tab with the specific given ID that it's
  looking for */
  });

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.tabs.query({currentWindow: true}, function(tabs){
    while(recentActiveTabs.length){
      console.log(recentActiveTabs[0]);
      chrome.tabs.remove(recentActiveTabs.shift());
    }
    });
  });

chrome.tabs.onActivated.addListener(function(activeInfo){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    if(!recentActiveTabs.includes(tabs[0].id)){
      console.log(tabs[0].id);
      recentActiveTabs.push(tabs[0].id);
    }
    //This appears to do nothing to solve the problem.
  });
});

chrome.webNavigation.onCommitted.addListener(function(commit){
  console.log(commit.tabId);
});

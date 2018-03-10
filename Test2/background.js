var timedClose = {
  timeOn : function(){
    chrome.alarms.create("myAlarm", {delayInMinutes: 0.1});
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  timedClose.timeOn();
  /*This effectively does work. HOWEVER: It also produces a runtime error
  runtime.lastError because there is no tab with the specific given ID that it's
  looking for */

  });

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.tabs.query({active: true/*active:true makes it only return the current selected or 'active'  tab*/,
  currentWindow: true}, function(tabs/*array of all tabs in current window*/) {
    chrome.tabs.remove(tabs[0].id);
      /*The original problem here seems to be that I didn't realize that tabs
      doesn't refer to the current tab, it refers to the tabs array. You have to
      define which one you want and it's id in order to avoid errors. This way
      also eliminates the runtime error above that was caused when this function
      was being called inside of the onClicked function.*/
  });
});

//Now I need to find a way to close a tab that is not the current tab.

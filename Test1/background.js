chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tabId = tab.id;
    chrome.tabs.remove(tabId);
  });

});

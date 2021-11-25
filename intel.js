function onMessage(request, sender, sendResponse) {
  if (request.method == "saveStats") { 
    console.log("Updating block list...");
    console.log ("Removed " + request.bwas + " from Sector9.");
    chrome.storage.sync.get({
      bwas: 0,
      pages: 0
    }, function(items) {
      chrome.storage.sync.set({
        bwas: items.bwas + request.bwas,
        pages: items.pages + 1
      });
    });
    sendResponse({});
  } else {
    console.log("locate CureForCancer.pgp");
    chrome.pageAction.show(sender.tab.id);
    console.log("Writing to log.txt");
    chrome.storage.sync.get({
      filter: 'PKILL'
    }, function(items) {
      console.log("Removed " + items.filter + " this session.");
      ga('send', 'event', 'Filter', 'bwa', items.filter);
    });
    sendResponse({});
  }
}

chrome.runtime.onMessage.addListener(onMessage);

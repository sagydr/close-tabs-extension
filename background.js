
var uodated_action = function(tabId, info, tab) {
	console.log('tabid: ' + tabId + ' info: ' + info + ' tab: ' + tab);
	console.dir(info);
	console.dir(tab);
   if ((info.status === 'complete' || info.status === 'loading') && isMatch(tab)) {
       console.log('match! closing ' + tabId);
       chrome.tabs.remove(tabId);
   }
};

var created_action = function(tab) {
	console.log('created tabid: ' + tab.tabId + ' info: ' + tab.info);
	console.dir(tab);
	var info = tab.info;
   if ((info.status === 'complete' || info.status === 'loading') && isMatch(tab)) {
       console.log('match! closing ' + tabId);
       chrome.tabs.remove(tabId);
   }
};

//chrome.tabs.onUpdated.addListener(uodated_action);

chrome.tabs.onCreated.addListener(created_action);

// chrome.tabs.onActivated.addListener(action);

function isMatch(tab) {

    console.log("comparing " + tab.url);
    if(/ab\./.test(tab.title)) {
        console.log("matched ab");
        return true;
    }

    console.log("looking for hebrew");
    var position = tab.title.search(/[\u0590-\u05FF]/);
    if(position >= 0){
        console.log("matched hebrew");
        return true;
    }

}



//chrome.extension.getBackgroundPage().console.log('foo');
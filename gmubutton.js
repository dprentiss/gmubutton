chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.query({currentWindow: true, active:true}, function (tabs) {
		var tabURL = tabs[0].url;
		var newURL = "http://mutex.gmu.edu/login?url=" + tabURL;
		chrome.tabs.update(tab.id, {url: newURL});
	});
});

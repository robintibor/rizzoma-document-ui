(function() {
  var addStylingFilesToCurrentTab;

  addStylingFilesToCurrentTab = function() {
    return chrome.tabs.executeScript(null, {
      file: "js/lib/jquery-1.10.2.js"
    }, function() {
      return chrome.tabs.insertCSS(null, {
        file: "css/rizzoma-iframe/subdiscussion-style.css"
      }, function() {
        return chrome.tabs.executeScript(null, {
          file: "js/rizzoma-iframe/style-subdiscussions.js"
        });
      });
    });
  };

  chrome.browserAction.onClicked.addListener(addStylingFilesToCurrentTab);

}).call(this);

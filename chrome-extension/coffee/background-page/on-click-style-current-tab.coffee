addStylingFilesToCurrentTab = ->
  # first insert jquery then css and js for styling...
  chrome.tabs.executeScript(null, { file: "js/lib/jquery-1.10.2.js" }, () -> 
        chrome.tabs.insertCSS(null, { file: "css/rizzoma-iframe/subdiscussion-style.css" }, () ->
            chrome.tabs.executeScript(null, { file: "js/rizzoma-iframe/style-subdiscussions.js" })
        )
    )

chrome.browserAction.onClicked.addListener(addStylingFilesToCurrentTab)

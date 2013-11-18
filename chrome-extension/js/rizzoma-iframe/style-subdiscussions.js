(function() {
  var findAndTransformButtons, getSubdiscussionButtons, hideReplies, showAllReplies, styleFrame, styleFrameAndHideReplies, transformSubDiscussionButtons;

  styleFrame = function() {
    showAllReplies();
    setTimeout(styleFrameAndHideReplies, 3000);
    return console.log("hihi");
  };

  showAllReplies = function() {
    return $('.js-show-replies').click();
  };

  hideReplies = function() {
    return $('.js-hide-replies').click();
  };

  styleFrameAndHideReplies = function() {
    findAndTransformButtons();
    return setTimeout(hideReplies, 4000);
  };

  findAndTransformButtons = function() {
    var subDiscussionButtons;
    subDiscussionButtons = getSubdiscussionButtons();
    return transformSubDiscussionButtons(subDiscussionButtons);
  };

  getSubdiscussionButtons = function() {
    return $('span.blip-thread:not(.root-thread) + br').prev().children('.fold-button-container').children('.fold-button');
  };

  transformSubDiscussionButtons = function(subDiscussionButtons) {
    var button, text, textSpan, _i, _len, _ref, _results;
    $(subDiscussionButtons).addClass('subdiscussion-button');
    _ref = subDiscussionButtons.slice(0);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      button = _ref[_i];
      textSpan = $(button).parent().parent().parent().children('span')[0];
      text = $(textSpan).text();
      $(button).text($(textSpan).text());
      _results.push($(textSpan).text(''));
    }
    return _results;
  };

  styleFrame();

}).call(this);

styleFrame = ->
  showAllReplies()
  setTimeout(styleFrameAndHideReplies, 3000)
  console.log("hihi")

showAllReplies = ->
  $('.js-show-replies').click()

hideReplies = ->
  $('.js-hide-replies').click()

styleFrameAndHideReplies = ->
  findAndTransformButtons()
  setTimeout(hideReplies, 4000)

findAndTransformButtons = ->
  subDiscussionButtons = getSubdiscussionButtons()
  transformSubDiscussionButtons(subDiscussionButtons)

getSubdiscussionButtons = ->
  # only those fild buttons that are immediately followed by a likebreak :)
  return $('span.blip-thread:not(.root-thread) + br').prev().children('.fold-button-container').children('.fold-button')

transformSubDiscussionButtons = (subDiscussionButtons) ->
  $(subDiscussionButtons).addClass('subdiscussion-button')
  for button in subDiscussionButtons[1..]
    textSpan = $(button).parent().parent().parent().children('span')[0]
    text = $(textSpan).text();
    $(button).text($(textSpan).text())
    $(textSpan).text('')

styleFrame()
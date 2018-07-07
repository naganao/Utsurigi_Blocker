$(function () {
  chrome.tabs.getSelected(null, function(tab) {
    $('#title').text(tab.title);
    $('#url').text(tab.url);
    $("body").html(
      $("body").html().replace( /ー/g, "━━━(ﾟ∀ﾟ)━━━" )
    );
  });
});

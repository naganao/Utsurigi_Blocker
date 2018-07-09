$(function () {
  chrome.tabs.getSelected(null, function(tab) {
    $('#title').text(tab.title);
    $('#url').text(tab.url);

    // chrome.tabs.sendMessage(tab.url, function (response){
    // 	console.log("受け取ったデータ：", response)
    // })

    if (localStorage.getItem('Amazon') === null) {
      localStorage.setItem('Amazon', 'unchecked');
    }

    if (localStorage.getItem('YouTube') === null) {
      localStorage.setItem('YouTube', 'unchecked');
    }

    var Amazon = localStorage.getItem('Amazon');
    var YouTube = localStorage.getItem('YouTube');
    console.log(Amazon);
    console.log(YouTube);

    if (Amazon.indexOf('checked') == 0) {
      $('#Amazon').prop('checked',true);

      if (tab.url.indexOf('http://www.amazon.co.jp') == 0 ||
      tab.url.indexOf('https://www.amazon.co.jp') == 0) {
        // Amazon のページのときの処理
        $('#caution').text("遊ぶな！");

      }

    } else {
      $('#Amazon').prop('checked',false);
    }

    if (YouTube.indexOf('checked') == 0) {
      $('#YouTube').prop('checked',true);

      if (tab.url.indexOf('http://www.youtube.com') == 0 ||
      tab.url.indexOf('https://www.youtube.com') == 0) {
        // YouTube のページのときの処理
        $('#caution').text("遊ぶな！");
      }

    } else {
      $('#YouTube').prop('checked',false);
    }

  });
});

$(function() {
  // チェックボックスをチェックしたら発動
  $('input[name="site"]').change(function() {

    var Amazon = $('#Amazon').prop('checked');
    var YouTube = $('#YouTube').prop('checked');

    if (Amazon) {
      localStorage.setItem('Amazon', 'checked');
    } else {
      localStorage.setItem("Amazon", "unchecked");
    }

    if (YouTube) {
      localStorage.setItem('YouTube', 'checked');
    } else {
      localStorage.setItem("YouTube", "unchecked");
    }

  });
});

function checkSite(site_name) {

}

// function () {
//   var site_list = [];
//
// }

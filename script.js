$(function(){
  chrome.runtime.sendMessage({method: "getLocalStorage", key: "Amazon"}, function(response) {
    console.log(JSON.parse(response.data));
    var data = JSON.parse(response.data);
    if (data["status"].indexOf('checked') == 0) {
      var tabURL = window.location.href;
      //console.log(tabURL);
      if (tabURL.indexOf('http://www.amazon.co.jp') == 0 ||
      tabURL.indexOf('https://www.amazon.co.jp') == 0) {
        // Amazon のページのときの処理
        disp();
      } else {
        //$('#Amazon').prop('checked',false);
      }
    }
  });

  chrome.runtime.sendMessage({method: "getLocalStorage", key: "YouTube"}, function(response) {
    var data = JSON.parse(response.data);
    if (data["status"].indexOf('checked') == 0) {
      var tabURL = window.location.href;

      if (tabURL.indexOf('http://www.youtube.com') == 0 ||
      tabURL.indexOf('https://www.youtube.com') == 0) {
        // YouTube のページのときの処理
        disp();
      }

    } else {
      //$('#YouTube').prop('checked',false);
    }

  });
});

function disp(){
  // 「OK」時の処理開始 ＋ 確認ダイアログの表示
  if(window.confirm('遊ぶんじゃない！')){
    history.back();
  }
  // 「OK」時の処理終了
  // 「キャンセル」時の処理開始
  else{
    window.alert('キャンセルされました'); // 警告ダイアログを表示
  }
  // 「キャンセル」時の処理終了
}

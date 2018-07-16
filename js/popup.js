/* サイトリスト作成 */
$(function() {
  if (localStorage.getItem('Amazon') === null) {
    var site_data = {
      name: "Amazon",
      domain: "https://www.amazon.co.jp",
      status: "unchecked"
    }
    localStorage.setItem('Amazon', JSON.stringify(site_data));
  }

  if (localStorage.getItem('YouTube') === null) {
    var site_data = {
      name: "YouTube",
      domain: "https://www.youtube.com",
      status: "unchecked"
    }
    localStorage.setItem('YouTube', JSON.stringify(site_data));
  }

  for (list in localStorage) {
    if (localStorage.hasOwnProperty(list)) {
      var site = JSON.parse(localStorage.getItem(list));
      $("#site_list").append('<div class="site_name">' +
      '<input type="checkbox" id="' + site["name"] + '" name="site" value="' + site["name"] + '">' +
      '<label for="' + site["name"] + '">' + site["name"] + '</label></div>'
    );
    if(site["status"].indexOf("checked") == 0){
      var id = '#' + site["name"]
      $(id).prop('checked',true);
      console.log(id);
    }else{
      var id = '#' + site["name"]
      $(id).prop('checked',false);
    }
    console.log(list);
    console.log(site);
  }
}
// for(var list in localStorage) {
//   $("#site_list").append('<div class="site_name">' +
//   '<input type="checkbox" id="' + list["name"] + '" name="site" value="' + list["name"] + '">' +
//   '<label for="' + list["name"] + '">' + list["name"] + '</label></div>'
//   );
//   console.log(list);
// }

});

/* サイトを検証 */
$(function() {
  chrome.tabs.getSelected(null, function(tab) {
    $('#title').text(tab.title);
    $('#url').text(tab.url);
    /* サイトを許可するかどうか */
    checkSite(tab.url);
  });
});

/* サイトを許可するかどうか */
function checkSite(site_url){

  var Amazon = localStorage.getItem('Amazon');
  var YouTube = localStorage.getItem('YouTube');
  console.log(Amazon);
  console.log(YouTube);
  //
  // if (Amazon.indexOf('checked') == 0) {
  //   $('#Amazon').prop('checked',true);
  //
  //   if (site_url.indexOf('http://www.amazon.co.jp') == 0 ||
  //   site_url.indexOf('https://www.amazon.co.jp') == 0) {
  //     // Amazon のページのときの処理
  //     $('#caution').text("遊ぶな！");
  //
  //   }
  //
  // } else {
  //   $('#Amazon').prop('checked',false);
  // }
  //
  // if (YouTube.indexOf('checked') == 0) {
  //   $('#YouTube').prop('checked',true);
  //
  //   if (site_url.indexOf('http://www.youtube.com') == 0 ||
  //   site_url.indexOf('https://www.youtube.com') == 0) {
  //     // YouTube のページのときの処理
  //     $('#caution').text("遊ぶな！");
  //   }
  //
  // } else {
  //   $('#YouTube').prop('checked',false);
  // }

  /* 追加サイトを検証 */

  // var site = localStorage.getItem(name);
  //
  // if (site["status"].indexOf('checked') == 0) {
  //   $('#site["name"]').prop('checked',true);
  //
  //   if (site_url.indexOf(site["domain"]) == 0) {
  //     // YouTube のページのときの処理
  //     $('#caution').text("遊ぶな！");
  //   }
  //
  // } else {
  //   $('#YouTube').prop('checked',false);
  // }

}

$(function() {
  // チェックボックスをチェックしたら発動
  $('input[name="site"]').change(function() {

    var Amazon = $('#Amazon').prop('checked');
    var YouTube = $('#YouTube').prop('checked');

    if (Amazon) {
      var site_data = {
        name: "Amazon",
        domain: "https://www.amazon.co.jp",
        status: "checked"
      }
      localStorage.setItem('Amazon', JSON.stringify(site_data));
    } else {
      var site_data = {
        name: "Amazon",
        domain: "https://www.amazon.co.jp",
        status: "unchecked"
      }
      localStorage.setItem("Amazon", JSON.stringify(site_data));
    }

    if (YouTube) {
      var site_data = {
        name: "YouTube",
        domain: "https://www.youtube.com",
        status: "checked"
      }
      localStorage.setItem('YouTube', JSON.stringify(site_data));
    } else {
      var site_data = {
        name: "YouTube",
        domain: "https://www.youtube.com",
        status: "unchecked"
      }
      localStorage.setItem("YouTube", JSON.stringify(site_data));
    }

  });
});

/* サイト追加 */
$(function() {
  $("#addSite").click(function() {
    // $("#site_list").append('<input type="text"></textbox>');
    var name = $("#add_site_name").val();
    var domain = $("#add_domain_name").val();
    var site_data = {
      name: name,
      domain: domain,
      status: "checked"
    }

    function isList(){
      var result = false;
      for (list in localStorage) {
        if (localStorage.hasOwnProperty(list)) {
          var site = JSON.parse(localStorage.getItem(list));

          if(site["name"].indexOf(name) == 0){
            result = true;
          }
          console.log('site["name"]',site["name"]);
          console.log('name',name);
        }
      }
      return result;
    }

    var is_list = isList();

    console.log(is_list);

    if(!($("#add_site_name").val()) || !($("#add_domain_name").val())){
      $('#caution').text("サイト名、またはドメイン名を入力してください。");
    }else if(is_list == true){
      $('#caution').text("すでに登録されています。");
    }else{
      //console.log(name);
      localStorage.setItem(name, JSON.stringify(site_data));
      //console.log(localStorage.getItem(name));
      var list = JSON.parse(localStorage.getItem(name));
      $("#site_list").append('<div class="site_name">' +
      '<input type="checkbox" id="' + list["name"] + '" name="site" value="' + list["name"] + '">' +
      '<label for="' + list["name"] + '">' + list["name"] + '</label></div>'
      );
      $('#caution').text("");
  }
  });
});

// function () {
//   var site_list = [];
//
// }

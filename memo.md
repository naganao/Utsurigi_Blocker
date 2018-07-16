# メモ
- https://developer.chrome.com/extensions

## 用意するもの
- manifest.json
- popup.html
- popup.css
- popup.js
- background.js
- script.js
- jquery

### manifest.json
ここに

### popup.html
ポップアップページ（アイコンをクリックしたら表示されるページ）。
jquery.jsとpopup.jsを読み込んでおく必要があります。

### popup.css
ポップアップページのレイアウト

### popup.js
ディレクトリはjs/popup.js。
ポップアップページで変更されたチェックボックスの状態をlocalstrageに保存する。

- #### タブ情報の取得

```js
chrome.tabs.getSelected(null, function(tab) {
  /* タブのタイトル */
  console.log('#title',tab.title);
  /* タブのurl */
  console.log('#url',tab.url);
});
```

- #### ローカルストレージ

localStorageに1つのキーに対し複数のデータを保存したいとき、オブジェクトとして保存します。

#### ローカルストレージ

```js
/* ローカルストレージに保存 */
localStorage.setItem('key', 'val')

/* ローカルストレージから値を取得 */
localStorage.getItem('key')
```

#### オブジェクトとして保存

```js
var obj = {
  name: "taro",
  age: 20,
  height: 170,
  weight: 60
}

/* オブジェクトとして登録 */
localStorage.setItem("taro", JSON.stringify(obj));
console.log(localStorage.getItem("taro"));
// {"name":"taro","age":20,"height":170,"weight":60}

/* オブジェクトを登録（JSON.stringifyなし） */
localStorage.setItem("taro", obj);
console.log(localStorage.getItem("taro"));
// [object Object]

/* 取り出し */
var person = JSON.parse(localStorage.getItem("taro"));
console.log("age:",person["age"]);
// age: 20

/* 取り出し（JSON.parseなし） */
var person = localStorage.getItem("taro");
console.log("age:",person["age"]);
// age: undefined
```

参考
https://www.tam-tam.co.jp/tipsnote/javascript/post5978.html


- #### チェックボックスの状態変化
propを用いる。

```js
/* チェックの入った状態にする */
$('id').prop('checked',true);

/* チェックが外れた状態にする */
$('id').prop('checked',false);
```

### background.js
ポップアップページとコンテンツページのメッセージの受け渡しの為に利用。
バックグラウンドで動いているもの。チェックボックスの値が変更されたときscriptjsにメッセージを送る。

- #### イベントリスナー

```js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
      sendResponse({data: localStorage[request.key]});
    else
      sendResponse({}); // snub them.
});
```

### script.js
コンテンツのページを変更するjs。


## Background Page

## 追加でやるべきこと
- リファクタリング
メソッド分割

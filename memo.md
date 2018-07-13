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

```js
/* ローカルストレージに保存 */
localStorage.setItem('key', 'val')

/* ローカルストレージから値を取得 */
localStorage.getItem('key')
```

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

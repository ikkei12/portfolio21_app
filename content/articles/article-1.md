---
    title: JAMSTACKなポートフォリオを作成しました
    thumbnail: https://storage.cloud.google.com/portfolio21-56e7e.appspot.com/ogp/files/article-1.png?authuser=1
    createdDate: "2021-01-17"
    categories: ['Nuxt','firebase','成果物']
    twitter: 1keiuu
---
# JAMSTACKなポートフォリオを作成しました

<div class="info">
    <div class="info__inner">
        <chip-group :chips="[{text:'Nuxt', color:'grey'},{text:'firebase', color:'grey'},{text:'成果物', color:'grey'}]"></chip-group>
        <div class="created-date">
            <Icon iconName="calendar"></Icon>
            <p>2021-01-17</p>
        </div>
    </div>
    <div class="reading-time --sp">
        <Icon  iconName="clock"></Icon>
        <p id="readingTimeSp"></p>
    </div>
</div>
<img src="https://storage.cloud.google.com/portfolio21-56e7e.appspot.com/ogp/files/article-1.png?authuser=1" class="thumbnail" alt="thumbnail" >

## はじめに
JAMStack(?)
(気づけば毎年ポートフォリオを作っていてこれで三つ目です。。)

過去のポートフォリオはこちら
<OgpCard url="https://portfolio21-56e7e.web.app/products/1"></OgpCard>
<OgpCard url="https://portfolio21-56e7e.web.app/products/5"></OgpCard>

## 使用した技術
FW: Nuxt.js  
コンテンツ管理: nuxt/content , Cloud Storage  
ホスティング: firebase hosting  
その他API: Cloud Functions  
CI/CD: Github Actions  

## なぜ作ろうと思ったか

・去年作ったポートフォリオのパフォーマンスが悪い（React/Go/AWSの勉強の為に作ってた為）
・↑は管理画面を作ってないのでコンテンツの更新が面倒
・UIT INSIDEでnuxt/contentを知ってコンテンツの管理がめちゃくちゃ便利そうだったhttps://uit-inside.linecorp.com/episode/71

工夫した所
・
・記事内でogpを表示する為の実装が必要だったのでurlからogp情報を取得するAPIをcloud functionsで作成しました。
以前まで無料だったCloud functionsもnode v10より有料（従量課金）との事、、
---
    id: 1
    title: Jamstackなポートフォリオを作成しました
    thumbnail: https://storage.googleapis.com/portfolio21-56e7e.appspot.com/ogp/files/article-1.png?authuser=1
    description: パフォーマンスと管理しやすさを考えて、ポートフォリオをJamstackで作り直しました。
    createdDate: "2021-01-17"
    category_ids: 
        - 1
        - 2
        - 52
    twitter: 1keiuu
    ogpURLs: 
        - https://portfolio21-56e7e.web.app/products/1
        - https://portfolio21-56e7e.web.app/products/5
        - https://qiita.com/ikkei12/items/0f0c2d95bdd3b54d6bac
    ogps: 
        - {title:"",description:"",image:""}
---
# Jamstackなポートフォリオを作成しました

<div class="info">
    <div class="info__inner">
        <chip-group :chips="categories"></chip-group>
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
<img src="https://storage.googleapis.com/portfolio21-56e7e.appspot.com/ogp/files/article-1.png?authuser=1" class="thumbnail" alt="thumbnail" >

## はじめに
Jamstackなポートフォリオが出来上がりました(当サイト)  
気づけば毎年ポートフォリオを作っていてこれで3つ目です。。  
今回はサーバーレスで管理のし易さとパフォーマンスを意識したものになりました。

過去のポートフォリオはこちら
<OgpCard :ogpindex="0" :ogps="ogps"></OgpCard>
<OgpCard :ogpindex="1" :ogps="ogps"></OgpCard>

## 使用した技術
**FW:** Nuxt.js  
**コンテンツ管理:** Nuxt/content , Cloud Storage  
**ホスティング:** Firebase hosting  
**その他API:** Cloud Functions  
**CI/CD:** Github Actions  

<br/>

## 作った理由

**① 去年作ったポートフォリオのパフォーマンスが悪い**  

　React/Go/AWSの勉強を目的とするあまり、ポートフォリオサイトとしての役割を考えずに作ってしまいました。  
　結果的に費用もUXも最低な魔物が生み出されてしまいました。。。
　特にthree.jsの部分はSPで見るとsafariが落ちるくらい重く、やっつけで作ったせいかチューニングも面倒になって放置状態。  
　これに反省して、「Jamstackでパフォーマンス最高なで管理し易いサイトに作り直そう！」と決心しました。  
  
**② 去年作ったポートフォリオは管理画面を作ってないのでコンテンツの更新が面倒**  

またしても2020年度版の欠陥なのですが、当初作る予定だった管理画面を作る気力がなくなってしまい、未だに内容を更新するにはEC2にsshしてSQL叩く必要があるという状況のまま。。  
冷静に考えてもポートフォリオでDB用のEC2インスタンス建ててたのアホすぎる。。。

**③ nuxt/contentを使ってみたくなった** 

はじめはmicroCMSでJamstackを目指して作成していたのですが、たまたま聞いていた[UIT INSIDE](https://uit-inside.linecorp.com/)のポッドキャストでnuxt/contentを知り、コンテンツの管理がめちゃくちゃ便利そうで使ってみたくなりました。  
しかもマークダウンで簡単にブログが作れる、、、！

②の失敗を踏まえても、Githubで管理したjson,マークダウンだけでコンテンツの管理ができるのだから、個人開発のポートフォリオに最適だと思いました。


<br/>

## 工夫した所   

**※ (ここら辺は詳しく別記事を書こうと思います！)**

### OGP画像の動的生成  
　Twitterなどでシェアした時にQiitaっぽいOGPが表示されるようになります。  
　Cloud Functions × Cloud Storageで実装しました。  
　以前まで無料だったCloud Functions(Firebase)もnode v10より有料（従量課金）との事、、  
  
**参考にした記事**   
[絶対にお金を払いたくない精神での動的OGP生成は辛い ](https://blog.ojisan.io/dynamic-ogp)  
<br/>  

### 記事内で表示するOGP情報の取得  
　Nuxt/Contentで書かれた記事内で外部ページのOGPを表示する為の実装が必要だったので、URLからOGP情報を取得するAPIをCloud Functionsで作成しました。  
　~~ただ、ここはページ表示の度に都度取得しているので、純粋なJamstackっと言えるのか？と言う気持ち。。~~  
  
  **1/18更新: OGP情報の取得をビルド時に変更した為改善されました！**
  
<br/>  

### CI／CDを設定して記事ページの自動更新  
　このサイトはSSGでビルドしているので、記事などのコンテンツを更新する度にビルドをかける必要があります。  
　そこで、Github Actions × Firebase Hostingを使ってCI/CDを構築しました。  
　この組み合わせは設定もめちゃくちゃ楽なので、短い期間での個人開発ではかなり使えると思います。    

以前Qiitaの記事にしました。  
<OgpCard :ogpindex="2" :ogps="ogps"></OgpCard>
　

<br/>

## 最後に

修正する点はまだまだ沢山あるのですが、なかなか管理しやすくパフォーマンスも比較的良いサイトが一旦は出来上がったのでは無いかと思います。  
使った技術が最小限かつパワフルでとても使いやすかったと思います。  
特にNuxt/contentが最高でした！  
あとは相変わらずFirebaseは個人開発の味方ですね。

これからはQiitaやzennに加えてこのブログでちょっとした記事を書いていこうと思うのでよろしくお願いします！

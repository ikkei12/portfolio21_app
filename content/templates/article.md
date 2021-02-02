---
    id: 0
    title: タイトル
    description: 説明
    thumbnail: https://storage.googleapis.com/portfolio21-56e7e.appspot.com/ogp/files/article-3.png?authuser=1
    createdDate: "日付"
    category_ids: 
        - 0
    twitter: 1keiuu
    ogpURLs: 
        - 
    ogps: 
        - {title:"", description:"", image:""}
---
<!-- ogpURLsとindexを合わせる
<ogp-card :ogpindex="0" :ogps="ogps"></ogp-card> -->

# タイトル

<div class="info">
    <div class="info__inner">
        <chip-group :chips="categories"></chip-group>                 
        <div class="created-date">
            <Icon iconName="calendar"></Icon>
            <p>日付</p>
        </div>
    </div>
    <div class="reading-time --sp">
        <Icon  iconName="clock"></Icon>
        <p id="readingTimeSp"></p>
    </div>
        <div class="sns-link__group">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-via="1keiuu" data-related="" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
</div>
<img width="100%" height="auto" src="https://storage.googleapis.com/portfolio21-56e7e.appspot.com/ogp/files/article-3.png?authuser=1" class="thumbnail" alt="thumbnail" >

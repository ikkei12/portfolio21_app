---
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
<OgpCard :ogpindex="0" :ogps="ogps"></OgpCard> -->

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
</div>
<img src="https://storage.googleapis.com/portfolio21-56e7e.appspot.com/ogp/files/article-3.png?authuser=1" class="thumbnail" alt="thumbnail" >

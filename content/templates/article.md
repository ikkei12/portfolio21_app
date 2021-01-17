---
    title: タイトル
    description: 説明
    thumbnail: サムネイル
    createdDate: "日付"
    categories: ['カテゴリ']
    twitter: 1keiuu
---
# タイトル

<div class="info">
    <div class="info__inner">
        <chip-group :chips="[{text:'カテゴリ', color:'grey'}]"></chip-group>
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
<img src="サムネイル" class="thumbnail" alt="thumbnail" >

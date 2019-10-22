# nuxtdemo

> testdemo

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run serve

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
#### 文档结构
assets/ ----------------------------------字体图标  <br>
components/ ---------------------------组件<br>
--| content.vue/ --------------------------热门推荐<br>
--| HomeHeader.vue/ --------------------Home头部<br>
--| HomeIcon.vue/ -----------------------Home轮播应用<br>
--| HomeSwiper.vue/ --------------------Home轮播图<br>
--| RecommendList.vue/ ----------------小鲸推荐<br>
--| SiteDescription.vue/ -----------------说明信息<br>
--| SiteNotice.vue/ -----------------------通知信息<br>
--| SitePicture.vue/ -----------------------详情图片<br>
--| SiteTicket.vue/ ------------------------选项卡内容<br>
pages/<br>
--| IconList
----| _id.vue------------------------------应用图标内详情页<br>
--| CityList.vue----------------------------城市列表<br>
--| detail.vue------------------------------详情页<br>
--| Home.vue------------------------------Home<br>
static/<br>
--| images<br>
----| icon-----------------------------------应用图标<br>
--| mock ------------------------------------模拟数据<br>
-------------未完成：需要HomeIcon.vue为每个应用动态跳转详情页（需要自己设计制作详情页）<br>

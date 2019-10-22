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
assets/ ----------------------------------字体图标 
components/ ---------------------------组件
--| content.vue/ --------------------------热门推荐
--| HomeHeader.vue/ --------------------Home头部
--| HomeIcon.vue/ -----------------------Home轮播应用
--| HomeSwiper.vue/ --------------------Home轮播图
--| RecommendList.vue/ ----------------小鲸推荐
--| SiteDescription.vue/ -----------------说明信息
--| SiteNotice.vue/ -----------------------通知信息
--| SitePicture.vue/ -----------------------详情图片
--| SiteTicket.vue/ ------------------------选项卡内容
pages/
--| IconList
----| _id.vue------------------------------应用图标内详情页
--| CityList.vue----------------------------城市列表
--| detail.vue------------------------------详情页
--| Home.vue------------------------------Home
static/
--| images
----| icon-----------------------------------应用图标
--| mock ------------------------------------模拟数据
-------------未完成：需要HomeIcon.vue为每个应用动态跳转详情页（需要自己设计制作详情页）

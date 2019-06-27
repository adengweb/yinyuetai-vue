<template>
  <div class="w albums">
    <div class="title">专辑</div>
    <dl class="selected" v-if="propSelectedData.length > 0">
      <dt>已选：</dt>
      <dd>
        <a href="javascript:;" v-for="(item, index) in propSelectedData" :key="index">{{item.name}}</a>
      </dd>
    </dl>
    <dl>
      <dt>{{classifyData.desc}}</dt>
      <dd>
        <a class="item" href="javascript:;" v-for="(classifyItem, index) in classifyData.value" :key="index" @click="selectAlbumsList(2+'_'+classifyItem.id)">{{classifyItem.name}}</a>
      </dd>
    </dl>
    <dl>
      <dt>公司</dt>
      <dd><a class="item" href="javascript:;" v-for="(companyItem, index) in companyData.value" :key="index" @click="selectAlbumsList(102+'_'+companyItem.id)">{{companyItem.name}}</a></dd>
    </dl>
    <dl>
      <dt>艺人</dt>
      <dd class="artist_dd">
        <div class="item" v-for="(artistItem,ine) in artistData.value" :key="ine">
          <span>{{artistItem.name}}</span>
          <a href="javascript:;" v-for="(item,index) in artistItem.data" :key="index" @click="selectAlbumsList(item.params)">{{item.title}}</a>
        </div>
      </dd>
    </dl>
    <template v-if="albumsLists.length > 0">
      <ul class="list clearfix">
        <li v-for="(item,index) in albumsLists" :key="index">
          <a href="#">
            <img :src="item.headImg" :alt="item.name">
            <div class="info">
              <h4>{{item.name}}</h4>
              <p class="price">¥{{item.price}}</p>
              <p class="like">
                <span>{{item.favoNum}}</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </template>
    <div class="" v-else-if="albumsLists.length < 0">
      暂无数据
      {{albumsLists.length}}
    </div>
    <loadingText v-else></loadingText>
    <div class="c-page">
      <a :href="item.url" v-for="(item,i) in cpageData" :key="i">{{item.text}}</a>
    </div>
  </div>
</template>
<script>
// 加载中组件
import loadingText from '../../components/loadingtext'
export default {
  name: 'albums',
  data () {
    return {
      ppath: '',
      classifyData: [],
      companyData: [],
      artistData: [],
      albumsLists: [],
      cpageData: [],
      propSelectedData: []
    }
  },
  methods: {
    _getAlbumsLists () {
      let _data = {bannerType: 'album', upTime: 'desc', pageSize: 40}
      this.$jsonp('http://shop.yinyuetai.com/search/goods.json', _data).then(res => {
        this.classifyData = res.data.goodsPage.nav[0]
        this.companyData = res.data.goodsPage.nav[1]
        this.artistData = res.data.goodsPage.nav[2]
        this.albumsLists = res.data.goodsPage.list
        this.cpageData = res.data.goodsPage.pages
        this.propSelectedData = res.data.goodsPage.propSelected
      })
    },
    selectAlbumsList (ppath) {
      this.ppath = ppath
      let _data = {bannerType: 'album', upTime: 'desc', pageSize: 40, ppath: this.ppath}
      this.$jsonp('http://shop.yinyuetai.com/search/goods.json', _data).then(res => {
        this.classifyData = res.data.goodsPage.nav[0]
        this.companyData = res.data.goodsPage.nav[1]
        this.artistData = res.data.goodsPage.nav[2]
        this.albumsLists = res.data.goodsPage.list
        this.cpageData = res.data.goodsPage.pages
        this.propSelectedData = res.data.goodsPage.propSelected
      })
    }
  },
  mounted () {
    this._getAlbumsLists()
  },
  components: {
    loadingText
  }
}
</script>

<style lang="scss" scoped>
.albums{
  padding-bottom: 50px;
  .title{
    margin: 20px 0;
    padding-left: 12px;
    font-size: 18px;
    border-left: 2px solid #ff3034;
  }
  dl{
    padding: 12px 0;
    dt{
      width: 50px;
      font-size: 16px;
      font-weight: bold;
      float: left;
      line-height: 24px;
    }
    dd{
      padding-left: 50px;
      .item{
        display: inline-block;
        padding: 4px 22px 4px 0;
        min-width: 160px;
        color: #666;
        span{
          font-size: 14px;
          color: #ff2c72;
        }
        a{
          display: inline-block;
          padding: 0 6px;
          color: #666;
        }
      }
      &.artist_dd{
        .item{
          min-width: 260px;
        }
      }
    }
    &.selected{
      a{
        position: relative;
        display: inline-block;
        padding: 4px 22px 4px 8px;
        color: #fff;
        background: #ff2c72;
        &:after{
          content: 'x';
          position: absolute;
          right: 0;
          top: 0;
          padding: 0 8px 0 0;
        }
      }
    }
  }
  .list{
    padding-top: 20px;
    li{
      float: left;
      height: 320px;
      width: 230px;
      margin: 0 10px 10px 0;
      background: #fafafa;
      img {
        width: 190px;
        height: 190px;
      }
    }
    a{
      display: block;
      padding: 10px;
      overflow: hidden;
      &:hover {
        box-shadow: 1px 1px 18px #ccc;
      }
      .info{
        text-align: center;
        h4 {
          height: 50px;
          font-size: 13px;
          color: #494c4d;
          padding-top: 12px;
          padding-bottom: 6px;
        }
        .price {
          display: inline-block;
          font-size: 14px;
          color: #ff437e;
        }
        .like {
          display: inline-block;
          padding-left: 20px;
          color: #ff437e;
          span {
            &:before {
              content: "";
              display: inline-block;
              margin-right: 5px;
              width: 13px;
              height: 10px;
              background: url(../../assets/img/ico.png) 0 -72px no-repeat;
            }
          }
        }
      }
    }
  }
  .c-page{
    text-align: center;
    a{
      display: inline-block;
      padding: 3px 8px;
    }
  }
}
</style>

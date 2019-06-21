<template>
  <div class="w albums">
    <div class="title">专辑</div>
    <template v-if="albumsLists.length > 0">
      <ul class="list clearfix">
        <li v-for="(item,index) in albumsLists" :key="index">
          <a href="#">
            <img v-lazy="item.headImg" :alt="item.name">
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
    <loadingText v-else></loadingText>
  </div>
</template>
<script>
// 加载中组件
import loadingText from '../../components/loadingtext'
export default {
  name: 'albums',
  data () {
    return {
      albumsLists: []
    }
  },
  methods: {
    _getAlbumsLists () {
      let _data = {bannerType: 'album', upTime: 'desc', pageSize: 40}
      this.$jsonp('http://shop.yinyuetai.com/search/goods.json', _data).then(res => {
        this.albumsLists = res.data.goodsPage.list
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
  .list{
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
}
</style>

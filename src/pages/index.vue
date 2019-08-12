<template>
  <div id="index">
    <div class="w mod-index">
      <div class="banneBox">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in swiperData" :key="index"><img :src="item.image1" alt=""></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        </swiper>
      </div>
      <div class="w clearfix">
        <div class="starchaser">
          <div class="title"><div class="text">追星必备</div></div>
          <swiper :options="starchaserOption" ref="starchaserSwiper">
            <swiper-slide v-for="(item,index) in starchaserData" :key="index"><img :src="item.image1" :alt="item.title1"><p>{{item.title1}}</p></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="signGoods">
          <a href="http://activity.shop.yinyuetai.com/index.html#/Activity/84?_k=rrtxso" target="_blank" alt="商城福利"><img src="http://img2.c.yinyuetai.com/user/myHomeSquare/190320/725/-M-635550fe4b881554e48fb12b5fe1fa17_0x0.jpg"></a>
        </div>
      </div>
      <div class="top">
        <div class="title">
          <div class="text">TOP榜</div>
          <div class="tabs">
            <a href="javascript:;" :class="{active:isHasType === 1}" @click="hladTopType(1)">明星榜</a>
            <a href="javascript:;" :class="{active:isHasType === 2}" @click="hladTopType(2)">商品榜</a>
          </div>
        </div>
        <div class="list clearfix">
          <div class="none" :class="{is_show: isHasType === 1}">
          <div class="item" v-for="(item,index) in hotStarData" :key="index">
            <a :chref="'http://shop.yinyuetai.com/artist.action?artistId='+item.artistId+''">
              <img :src="item.artistImg" :alt="item.artistName">
              <div class="top_i" :class="{mack_top: index < 3}">
                <sup>{{index +1}}</sup>
              </div>
              <div class="info">
                <p>销量：{{item.sellNum}}</p>
                <span>{{item.artistName}}</span>
              </div>
            </a>
          </div>
          </div>
          <div class="none" :class="{is_show: isHasType === 2}">
          <div class="item p_item" v-for="(pitem,ikey) in hotProductData" :key="ikey">
            <a :chref="pitem.goodsUrl">
              <img :src="pitem.imgUrl" :alt="pitem.goodsName">
              <div class="top_i" :class="{mack_top: ikey < 3}">
                <sup>{{ikey +1}}</sup>
              </div>
              <h4>{{pitem.goodsName}}</h4>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div class="news">
        <div class="title"><div class="text">新品首发</div></div>
        <div class="list clearfix">
          <template v-if="newData.length > 0">
          <div class="item" v-for="(items,index) in newData" :key="index">
            <router-link :to="{path:'/Detail',query:{goodsId:3786}}">
              <div class="pic">
                <img v-lazy="items.imgUrl" :alt="items.goodsName">
              </div>
              <div class="info">
                <h4>{{items.goodsName}}</h4>
                <p class="price">¥{{items.realPrice}}</p>
                <p class="like">
                  <span @click="HladLike(items.goodsId)">{{items.faveNum}}</span>
                </p>
              </div>
            </router-link>
          </div>
          </template>
          <loadingText v-else></loadingText>
        </div>
      </div>
      <div class="love">
        <div class="title"><div class="text">大家喜欢<span @click="refresh" class="refresh">刷新</span></div></div>
        <div class="list clearfix">
          <template v-if="likeData.length > 0">
          <div class="item" v-for="(item,index) in likeData" :key="index">
            <a :chref="'http://shop.yinyuetai.com/detail.action?goodsId='+item.id+''">
              <img :alt="item.name" :src="item.headImg">
              <h4>{{item.name}}</h4>
              <div class="info">
                <p class="price">¥{{item.price}}</p>
                <p class="like">
                  <span @click="HladLike(item.id)">{{item.favoNum}}</span>
                </p>
              </div>
            </a>
          </div>
          </template>
          <loadingText v-else></loadingText>
        </div>
      </div>
    </div>
    <fixedTool></fixedTool>
  </div>
</template>
<script>
import fixedTool from '../components/fixed-tool'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import loadingText from '../components/loadingtext'
export default {
  name: 'index',
  data () {
    return {
      swiperData: [],
      starchaserData: [],
      hotStarData: [],
      hotProductData: [],
      newData: [],
      likeData: [],
      PageNum: 1,
      isHasType: 1,
      swiperOption: {
        effect: 'coverflow',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      starchaserOption: {
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    _getSwiperData () {
      this.$jsonp('http://shop.yinyuetai.com/shopRec/list.json', {rec_id: 7}).then(res => {
        this.swiperData = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    _getStarchaserData () {
      this.$jsonp('http://shop.yinyuetai.com/shopRec/list.json', {rec_id: 2}).then(res => {
        this.starchaserData = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    _getNewData () {
      this.$jsonp('http://shop.yinyuetai.com/goods/publish.json', {max_count: 6}).then(res => {
        this.newData = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    _getLikeData () {
      let _data = {
        pageNum: this.PageNum,
        pageSize: 10
      }
      this.$jsonp('http://shop.yinyuetai.com/search/goods.json', _data).then(res => {
        this.likeData = res.data.goodsPage.list
      }).catch(err => {
        console.log(err)
      })
    },
    refresh () {
      let _pagenum = this.PageNum
      _pagenum++
      this.PageNum = _pagenum
      let _data = {
        pageNum: this.PageNum,
        pageSize: 10
      }
      this.$jsonp('http://shop.yinyuetai.com/search/goods.json', _data).then(res => {
        this.likeData = res.data.goodsPage.list
      }).catch(err => {
        console.log(err)
      })
    },
    HladLike (val) {},
    _getHotStarData () {
      let _params = {
        group_art: true,
        order_snum: true,
        max_count: 8
      }
      this.$jsonp('http://shop.yinyuetai.com/goods/listForArt.json', _params).then(res => {
        this.hotStarData = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    _getHotProductData () {
      let _params = {
        order_snum: true,
        max_count: 8
      }
      this.$jsonp('http://shop.yinyuetai.com/goods/listForGood.json', _params).then(res => {
        this.hotProductData = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    hladTopType (type) {
      if (type === 1) {
        this.isHasType = type
      } else {
        this.isHasType = type
      }
    }
  },
  mounted () {
    this._getSwiperData()
    this._getStarchaserData()
    this._getHotStarData()
    this._getHotProductData()
    this._getNewData()
    this._getLikeData()
  },
  components: {
    fixedTool,
    loadingText,
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss" scoped>
.mod-index {
  .title {
    height: 43px;
    padding-top: 22px;
    .text {
      padding-left: 10px;
      border-left: 2px solid #ff2c72;
      font-size: 18px;
    }
  }

  .banneBox{
    .swiper-slide{
      img{
        width: 100%;
        height: 398px;
      }
    }
    .swiper-pagination{
      bottom: 20px;
    }
    .swiper-button-prev{
      left: 20px;
    }
    .swiper-button-next{
      right: 20px;
    }
  }

  .starchaser {
    float: left;
    width: 870px;
    .swiper-container-horizontal{
      height: 136px;
      &>.swiper-pagination-bullets{
        bottom: 0px;
      }
    }
    .swiper-slide{
      p{
        padding-top: 3px;
        text-align: center;
      }
    }
  }
  .signGoods {
    float: right;
    width: 300px;
    padding-top: 35px;
    img {
      width: 100%;
    }
  }

  .top {
    .title {
      position: relative;
      text-align: center;
      .text {
        text-align: left;
      }
      .tabs {
        margin-top: -20px;
        a {
          display: inline-block;
          padding: 0 16px;
          margin: 0 3px;
          line-height: 22px;
          &.active {
            color: #fff;
            background: #f1368b;
            border-radius: 11px;
          }
        }
      }
    }
    .list {
      margin-left: -16px;
      .none{
        display: none;
        &.is_show{
          display: block;
        }
      }
      .item {
        float: left;
        height: 190px;
        padding-left: 16px;
        a {
          position: relative;
          display: block;
          width: 136px;
          height: 180px;
          overflow: hidden;
          img{
            width: 136px;
            height: 136px;
          }
          .top_i {
            position: absolute;
            left: 0;
            top: 0;
            sup {
              position: absolute;
              left: 0;
              top: 0;
              width: 20px;
              text-align: center;
              font-size: 20px;
              line-height: 24px;
              z-index: 1;
            }
            &:after {
              content: "";
              display: block;
              width: 0;
              height: 0;
              margin-left: -20px;
              margin-top: -5px;
              border-width: 0 30px 30px;
              border-style: solid;
              border-color: transparent transparent #fb91c1;
              transform: rotate(-45deg);
            }
            &.mack_top{
              color: #fff;
              &:after{
                border-color: transparent transparent #f1368b;
              }
            }
          }
          .info {
            text-align: center;
            p {
              position: relative;
              margin-top: -25px;
              line-height: 22px;
              margin-bottom: 6px;
              color: #fff;
              background: rgba(0, 0, 0, 0.5);
            }
            span {
              font-weight: bold;
            }
          }
        }
        &.p_item{
          a{
            border: 1px solid #c3cbcf;
            width: 126px;
            padding: 4px;
            img{
              width: 126px;
              height: 126px;
            }
            h4{
              padding-top: 2px;
              font-size: 12px;
              text-align: center;
            }
          }
        }
      }
    }
  }

  .news {
    .list {
      margin-right: -11px;
      .item {
        float: left;
        width: 393px;
        height: 210px;
        margin: 0 10px 10px 0;
        background: #fafafa;
        img {
          width: 100%;
          height: 190px;
        }
        a {
          display: block;
          overflow: hidden;
          padding: 8px;
          &:hover {
            box-shadow: 1px 1px 18px #ccc;
          }
        }
        .pic {
          float: left;
          width: 190px;
          height: 190px;
        }
        .info {
          padding-left: 210px;
          h4 {
            font-size: 13px;
            color: #494c4d;
            height: 65px;
            padding-top: 12px;
          }
          .price {
            margin: 10px 0 13px;
            font-size: 14px;
            color: #ff437e;
          }
          .like {
            color: #999;
            cursor: pointer;
            span {
              &:before {
                content: "";
                display: inline-block;
                margin-right: 5px;
                width: 13px;
                height: 10px;
                background: url(../assets/img/ico.png) 0 -72px no-repeat;
              }
            }
            &:hover{
              color: #ff437e;
              span {
                &:before {
                  background-position: -13px -72px;
                }
              }
            }
          }
        }
      }
    }
  }

  .love {
    padding-bottom: 40px;
    .refresh{
      display: inline-block;
      padding-left: 20px;
      font-size: 13px;
      color: #ff437e;
      cursor: pointer;
    }
    .list {
      margin-right: -11px;
      .item {
        float: left;
        width: 190px;
        height: 300px;
        margin-right: 12px;
        margin-bottom: 10px;
        padding: 15px 20px 0px;
        background: #fafafa;
        img {
          width: 190px;
          height: 190px;
        }
        &:hover {
          box-shadow: 1px 1px 18px #ccc;
        }
        a {
          display: block;
          overflow: hidden;
        }
        h4 {
          padding-top: 8px;
          font-size: 13px;
          color: #494c4d;
          height: 60px;
        }
        .info {
          .price {
            display: inline-block;
            font-size: 14px;
            color: #ff437e;
          }
          .like {
            float: right;
            color: #999;
            span {
              padding-top: 4px;
              &:before {
                content: "";
                display: inline-block;
                margin-right: 5px;
                width: 13px;
                height: 10px;
                background: url(../assets/img/ico.png) 0 -72px no-repeat;
              }
            }
          }
        }
      }
    }
  }
}
</style>

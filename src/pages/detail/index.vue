<template>
  <div class="w mod-detail">
    <div class="crumb"><a href="/">首页</a> > {{detailData.title}}</div>
    <div class="item-box clearfix">
      <div class="slide">
        <el-carousel height="418px" :interval="3000" arrow="hover">
          <el-carousel-item v-for="(item, index) in detailData.descImages" :key="index">
            <img :src="item.thumbUrl" alt="item.title1">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="item-params">
        <h3>{{detailData.title}}</h3>
        <div class="select-box">
          <dl v-if="detailData.artistName">
            <dt>艺人</dt>
            <dd><p>{{detailData.artistName}}</p></dd>
          </dl>
          <dl class="c_price">
            <dt>商城价格</dt>
            <dd><span>￥{{detailData.price}}</span> <del>¥{{detailData.originalPrice}}</del></dd>
          </dl>
          <div v-if="modelsData">
            <dl v-for="(item, index) in modelsData" :key="index">
              <dt>{{item.name}}</dt>
              <dd>
                <div class="u_type">
                  <a href="javascript:;" v-for="(models, mindex) in item.propPriceModels" :key="mindex">{{models.name}}</a>
                </div>
              </dd>
            </dl>
          </div>
          <dl>
            <dt>数量</dt>
            <dd>
              <div class="item-num">
                <span class="disabled">-</span>
                <input type="text" v-model="count">
                <span>+</span>
                <div class="exist">库存{{detailData.inventory}}件</div>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>销量</dt>
            <dd><p>{{detailData.sellNum}}件</p></dd>
          </dl>
        </div>
        <div class="btns">
          <a href="#" class="cart">加入购物车</a>
          <a href="#">立即购买</a>
        </div>
      </div>
    </div>
    <div class="item-detail">
      <div class="title"><i class="iconfont icon-ditu1"></i> 商品详情</div>
      <div class="detail-box" v-html="detailData.info">
      </div>
    </div>
    <fixedTool></fixedTool>
  </div>
</template>
<script>
import fixedTool from '../../components/fixed-tool'
export default {
  name: 'Detail',
  data () {
    return {
      count: 1,
      goodsId: this.$route.params.id,
      detailData: {},
      modelsData: []
    }
  },
  mounted () {
    this._getDetailDate()
  },
  methods: {
    _getDetailDate () {
      this.$jsonp('http://shop.yinyuetai.com/goods/detail.json', {goodsId: this.goodsId}).then(res => {
        console.log(res.data)
        this.detailData = res.data
        this.modelsData = this.detailData.propFieldModels
      })
    }
  },
  components: {
    fixedTool
  }
}
</script>
<style lang="scss" scoped>
.mod-detail{
  padding-top: 20px;
  .crumb{
    padding-bottom: 20px;
    font-size: 14px;
    color: #999;
  }
  .item-box{
    .slide{
      float: left;
      width: 418px;
    }
    .item-params{
      padding-left: 468px;
      h3{
        font-size: 16px;
        font-weight: bold;
        color: #333;
        padding-bottom: 16px;
      }
      .u_type{
        a{
          display: inline-block;
          margin:0 4px;
          padding: 0 18px;
          color: #333739;
          font-size: 14px;
          line-height: 28px;
          position: relative;
          border: 1px solid #c9c9c9;
          &:hover {
            box-sizing: border-box;
            padding: 0 17px;
            border: 2px #f52a6e solid;
            line-height: 26px;
          }
          &.cur{
            box-sizing: border-box;
            padding: 0 17px;
            border: 2px #f52a6e solid;
            line-height: 26px;
            &:after{
              content: '';
              background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVRIx73VvUscURTG4d/uMrNGTCIkYAoFrRZOUoggmCpWsdNOrLTwC1McSMiKSsqUYhW1CFr4kYD4AQoKoiL+DVpoK4jdpjmNk+ymyLpRdyc7ozuZ8j3v5ZnL5XLhP3wm+jkWMRADJoEPkUF5ZBoYAYgEMtEEMAf0XWcVh0zUARaAnpt5RSETdYEVoOvurGKQiVYD60BHqXlFIBOtAbaAdr/OgyETfQrsAK//1XsQZKLPgF2gpVz33pCJ1gF7wKsg/XtBJlqfR1JB14SGTLQROACawqyLh0RSwFFYJBRkoi+BQ6AhDOBM9gWHTLQlj7wIgyRXP8LPX8EgE20D9oHn11miq7U8sjFK9uwCb2ypPGSib/hzT2pv5omOZtzpQX9kLU325Bxv4lsh84VM9C2wDTy+O7t69xWqHNwvA8XIeprs6QXep++38rgP0glsAtV+P3LVPwNJB3fm786SG6Nkj8/xJpaL+rESSDewBDhlDwJwZ4fIZYzYk0fkfljRTkpCJtoLzAOJIEgBW1Rylxm89KJvpwCZ6DAwS0TPezyPvI8SAYib6DgwFSUC8BuCn3LER1Bl8wAAAABJRU5ErkJggg==') no-repeat;
              background-size: 20px;
              width: 20px;
              height: 18px;
              position: absolute;
              bottom: 0;
              right: 0;
            }
          }
        }
      }
      .item-num{
        display: inline-block;
        span{
          position: relative;
          float: left;
          width: 30px;
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          color: #fff;
          background: #f52a6e;
          cursor: pointer;
          user-select: none;
          &:hover{
            opacity: .8;
          }
          &.disabled{
            opacity: .6;
            cursor: no-drop;
          }
        }
        input{
          float: left;
          line-height: 28px;
          width: 40px;
          text-align: center;
          border: 1px solid #f52a6e;
          border-right: 0;
          border-left: 0;
        }
        .exist{
          display: inline-block;
          padding-left: 20px;
          padding-top: 6px;
          color: #999;
        }
      }
      .select-box{
        min-height: 300px;
        dl{
          padding: 6px 0;
          font-size: 14px;
          dt{
            float: left;
            width: 54px;
            padding-right: 10px;
            line-height: 30px;
            color: #999;
          }
          dd{
            p{
              line-height: 30px;
            }
          }
          &.c_price{
            height: 60px;
            dt{
              width: 64px;
            }
            span{
              padding-right: 20px;
              font-size: 21px;
              color: #ff2c72;
            }
            del{
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
      .btns{
        a{
          display: inline-block;
          width: 170px;
          line-height: 50px;
          text-align: center;
          font-size: 21px;
          color: #f52a6e;
          border: 1px solid #f52a6e;
          border-radius: 26px;
          margin-right: 16px;
          &.cart{
            color: #fff;
            background: #f52a6e;
          }
        }
      }
    }
  }
  .item-detail{
    padding-top: 26px;
    .title{
      position: relative;
      font-size: 21px;
      line-height: 50px;
      padding-left: 60px;
      color: #fff;
      margin-bottom: 12px;
      background: #f52a6e;
      border-bottom: 2px solid #f52a6e;
      overflow: hidden;
      .iconfont{
        position: absolute;
        left: 0;
        top: 0;
        font-size:40px;
        opacity: .5;
      }
    }
    .detail-box{
      padding: 20px 0;
      font-size: 16px;
      line-height: 30px;
    }
  }
}
</style>

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
      detailData: {},
      modelsData: []
    }
  },
  mounted () {
    this._getDetailDate()
  },
  methods: {
    _getDetailDate () {
      this.$jsonp('http://shop.yinyuetai.com/goods/detail.json', {goodsId: this.$route.params.id}).then(res => {
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
<style lang="scss" scoped src="./detail.scss">

</style>

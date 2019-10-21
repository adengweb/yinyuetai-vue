<template>
  <div class="mod-fixed-tool">
    <ul>
      <li class="i-buy"><router-link to="/cart">购物车<span class="tip">{{this.$store.state.buyNum}}</span></router-link></li>
      <li class="i-faq"><router-link to="/faq">常见问题</router-link></li>
      <li class="i-github"><a href="https://github.com/adengweb" target="_blank">Github</a></li>
      <li class="i-gotop"><a href="javascript:;" @click="gotoTop">返回顶部</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'fixed-tool',
  data () {
    return {

    }
  },
  methods: {
    gotoTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style lang="scss" scoped>
.mod-fixed-tool {
  position: fixed;
  right: 0;
  bottom: 10px;
  background-color: #fff;
  font-size: 12px;
  border-top: 1px solid #e5e5e5;
  z-index: 2;
  li{
    width: 78px;
    text-align: center;
    border: 1px solid #e5e5e5;
    border-top: none;
    .tip{
      position: absolute;
      top: -6px;
      left:-6px;
      width: 16px;
      height: 16px;
      line-height: 16px;
      color: #fff;
      background: #ff3034;
      text-align: center;
      border-radius: 50%;
    }
    a{
      display: block;
      padding: 40px 0 10px 0;
      color: #999;
      background: url(https://cxstatic.img16888.com/dist/images/cherry/fixed-tool.png) no-repeat -112px 8px;
      &:hover{
        color: #ff3034
      }
    }
    &.i-buy{
      a{
        position: relative;
        background-position: -112px 8px;
        &:hover{
          background-position: 23px 8px;
        }
      }
    }
    &.i-faq{
      a{
        background-position: -112px -161px;
        &:hover{
          background-position: 23px -161px;
        }
      }
    }
    &.i-github{
      a{
        background: url('http://github.githubassets.com/favicon.ico') no-repeat 50% 8px;
        background-size: 26px;
      }
    }
    &.i-gotop{
      a{
        background-position: -112px -416px;
        &:hover{
          background-position: 23px -416px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="faq w">
    <div class="title">常见问题</div>
    <template v-if="faqList.length > 0">
    <ul class="lists">
      <li v-for="(item,index) in faqList" :key="index">
        <a :href="['https://v.yinyuetai.com/video/'+item.videoId+'']" target="_blank">
          <img :src="item.image" :alt="item.title">
          <h4>{{item.title}}</h4>
          <h5>时间：{{item.date}}</h5>
          <p>{{item.subTitle}}</p>
        </a>
      </li>
    </ul>
    </template>
    <loadingText v-else></loadingText>
  </div>
</template>
<script>
import loadingText from '@/components/loadingtext'
import fixedTool from '@/components/fixed-tool'
export default {
  name: 'faq',
  data () {
    return {
      faqList: []
    }
  },
  methods: {
    _getFaqData: function () {
      this.$http.Get('/api/faqList', {}).then((res) => {
        this.faqList = res.data.list
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this._getFaqData()
  },
  components: {
    loadingText,
    fixedTool
  }
}
</script>
<style lang="scss" scoped>
.faq{
  padding-bottom: 50px;
  .title{
    margin: 20px 0;
    padding-left: 12px;
    font-size: 18px;
    border-left: 2px solid #ff3034;
  }
  ul{
    li{
      padding: 10px 0;
      font-size: 14px;
      border-bottom: 1px solid #f1f1f1;
      a{
        &:after{
          content: '';
          display: block;
          clear: both;
        }
      }
      img{
        float: left;
        padding-right: 20px;
      }
      h4{
        font-size: 18px;
        padding: 12px 0;
      }
      h5{
        padding-bottom: 20px;
      }
      p{
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>

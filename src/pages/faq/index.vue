<template>
  <div class="faq w">
    <div class="title">常见问题</div>
    <template v-if="faqList.length > 0">
    <ul class="lists">
      <li v-for="(item,index) in faqList" :key="index">
        <a :href="['https://v.yinyuetai.com/video/'+item.videoId+'']" target="_blank"><span>{{item.videoId}}</span>{{item.title}}<br><br><img :src="item.image" :alt="item.title"></a>
      </li>
    </ul>
    </template>
    <loadingText v-else></loadingText>
  </div>
</template>
<script>
import loadingText from '@/components/loadingtext'
import http from '@/common/js/http.js'
export default {
  name: 'faq',
  data () {
    return {
      faqList: []
    }
  },
  methods: {
    _getFaqData: function () {
      http.Get('api/faqData.json', {}).then((res) => {
        this.faqList = res.data.lists
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this._getFaqData()
  },
  components: {
    loadingText
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
      span{
        float: right;
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>

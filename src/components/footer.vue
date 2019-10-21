<template>
  <div id="footer">
    <div class="footer">
      <div class="w">
        <div class="link">
          <a v-for="(item,key) in footMenu" :key="key" :href="item.link">{{item.title}}</a>
        </div>
        <div class="copy">
          Copyright © 2009 - 2016 yinyuetai.com 广播电视节目制作经营 许可证编号(京)字第1891号 | 京网文[2014]2037-287号 | 网络视听许可证0110413号
          <br>京公网安备11010502014900号| 京ICP备11024134号-1 | 京ICP证060716号 | 出版物经营许可证 新出发京零字第朝130062号 | 增值电信业务经营许可证B2-20140501
          <br>食品经营许可证:JY11105040485363 | 营业执照
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
  data () {
    return {
      footMenu: [
        { title: '关于我们', link: 'https://adeng.vip/index.php/category/4.html' },
        { title: '人才招聘', link: 'http://www.yinyuetai.com/joinus' },
        { title: '联系我们', link: 'https://adeng.vip/index.php/category/2.html' },
        { title: '友情链接', link: 'https://adeng.vip/index.php/category/3.html' },
        { title: '版权声明', link: 'http://www.yinyuetai.com/article/4' },
        { title: '客服中心', link: 'http://www.yinyuetai.com/service/problem' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 40px 0 30px;
  line-height: 22px;
  color: #666;
  background: #000;
  .link {
    text-align: center;
    a {
      margin: 0 10px;
      color: #999;
      &:hover {
        color: #52e2c0;
      }
    }
  }
  .copy {
    padding-top: 10px;
    text-align: center;
    .menu {
      margin-bottom: 6px;
      a {
        padding: 0 5px;
      }
    }
  }
}
</style>

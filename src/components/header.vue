<template>
  <div id="header">
    <div class="header">
      <div class="w set">
        <h1><a :href="baseInfo.url"><img :src="baseInfo.imgurl" :alt="baseInfo.title" :title="baseInfo.title"></a></h1>
        <div class="search">
            <div class="box">
              <input type="text" class="text" v-model="searchVaule" @focus="handleFocus" @blur="handleBlur" @keyup="keyUpSearch(searchVaule)" placeholder="搜索偶像、商品">
              <a class="btn" @click="getSearch(searchVaule)">搜索</a>
              <ul class="list" v-show="focused">
                <li class="s_hot">热门搜索</li>
                <li v-if="searchList.length === 0" class="none">暂无搜索内容</li>
                <li v-for="(item,index) in searchList" :key="index"><a :chref="item.catType == 1 ? 'https://sz.chexiu.com/search/list-'+item.cat_id+'-0-0-0-0-0-0-1.html' : 'https://sz.chexiu.com/style/'+item.cat_id+'.html'">{{item.title}}</a></li>
              </ul>
            </div>
        </div>
        <template v-if="isLogin">
        <div class="ucenter">
          <span class="u_name" @mousemove="mousemoveMenu">
            <img :src="userInfo.avatarUrl" :alt="userInfo.name" class="avatar">
            {{userInfo.name}}
            <b class="iconfont icon-unfold" @mouseout="mouseoutMenu"></b>
            <div class="tier" v-show="isHasMenu" @mouseout="mouseoutMenu">
              <router-link to='/ucenter'>个人中心</router-link>
              <router-link to='/like'>我喜欢的</router-link>
              <a @click="outLoagin">退出</a>
            </div>
          </span>
          <router-link to='/order'><i class="iconfont icon-erweima"></i>我的订单</router-link>
          <router-link to='/cart'><i class="iconfont icon-tongyong"></i>购物车</router-link>
        </div>
        </template>
        <template v-else>
        <div class="ucenter">
          <a href="javascript:;" @click="LoaginPop"><i class="iconfont icon-grzx"></i>登录</a>
          <router-link to='/order'><i class="iconfont icon-erweima"></i>我的订单</router-link>
          <router-link to='/cart'><i class="iconfont icon-tongyong"></i>购物车</router-link>
        </div>
        </template>
      </div>
      <div class="navbox">
        <ul class="w clearfix">
          <li><router-link to='/index' :class="{'active':$route.meta.active === '/index'}">首页</router-link></li>
          <li><router-link to='/albums'>专辑</router-link></li>
          <li><router-link to='/surround'>明星周边</router-link></li>
          <li><router-link to='/fashion'>明星同款</router-link></li>
          <li><router-link to='/makeup'>个护美妆</router-link></li>
          <li><router-link to='/digit'>影漫周边</router-link></li>
        </ul>
      </div>
    </div>
    <div class="loginPop" v-show="isLoginShow">
      <div class="title">用户登录<span class="close" @click="closeLoginPop">x</span></div>
      <ul>
        <li><span>用户名：</span><input type="text" v-model="UserName" placeholder="请输入用户名"></li>
        <li><span>密码：</span><input type="password" v-model="password" minlength="6" placeholder="请输入密码"></li>
        <li class="btn"><a href="javascript:;" @click="login">登录</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import cookie from 'js-cookie'
export default {
  data () {
    return {
      baseInfo: {
        url: 'https://adeng.vip',
        imgurl: 'http://s.yytcdn.com/v2/images/shop-logo-v1.png',
        title: '音悦商城'
      },
      searchList: [],
      userInfo: {
        name: '前端蜗牛',
        avatarUrl: '//avatars2.githubusercontent.com/u/5827625?s=60&v=4'
      },
      UserName: '',
      password: '',
      searchVaule: '',
      focused: false,
      isLogin: false,
      isLoginShow: false,
      isHasMenu: false
    }
  },
  created () {
    // this._getSearchList()
  },
  methods: {
    handleFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleBlur (event) {
      this.focused = false
      this.$emit('blur', event)
    },
    keyUpSearch (value) {
      let params = {kwd: value}
      this.$jsonp('https://sz.chexiu.com/index.php?r=site/api/searchstyle', params).then(res => {
        this.searchList = res.data
      })
    },
    getSearch (value) {
      this.focused = false
      alert('搜索' + value + '跳转成功！')
    },
    mousemoveMenu () {
      this.isHasMenu = true
    },
    mouseoutMenu () {
      this.isHasMenu = false
    },
    outLoagin () { // 登出
      this.isLogin = false
    },
    LoaginPop () {
      this.isLoginShow = true
    },
    closeLoginPop () {
      this.isLoginShow = false
    },
    login () {
      if (this.UserName === '') {
        alert('用户名不能为空~')
        return
      }
      if (this.password === '') {
        alert('密码不能为空~')
        return
      }
      cookie.set('username', this.UserName, 7)
    }

  }
}
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  color: #fff;
  background: #1f2122;
  z-index: 2;
  .set{
    position: relative;
    height:126px;
    h1{
      position: absolute;
      left:20px;
      top:20px;
    }
    .ucenter{
      position: absolute;
      right: 0;
      bottom:40px;
      a{
        padding: 2px 6px;
        margin-left: 6px;
        color: #fff;
        .iconfont{
          padding-right: 3px;
        }
        &:hover{
          color: #52e2c0;
        }
      }
      .avatar{
        width: 20px;
        height:20px;
        display: inline-block;
        vertical-align: middle;
      }
      .u_name{
        position: relative;
        display: inline-block;
        cursor: pointer;
        vertical-align: middle;
        margin-top: -5px;
        .icon-unfold{
          vertical-align: middle;
          color: #ff2c72;
        }
        .tier{
          position: absolute;
          left: 0;
          top: 24px;
          padding: 0 6px;
          width: 78px;
          line-height: 33px;
          text-align: center;
          background: rgba(41, 44, 45, 0.9);
          border-radius: 10px;
          a{
            display: block;
          }
        }
      }
    }
    .search{
      width: 500px;
      margin:0 auto;
      padding-top: 46px;
      .box{
        position: relative;
        padding-right: 106px;
      }
      .btn{
        position: absolute;
        right: 0;
        top:0;
        width: 106px;
        height:42px;
        line-height:40px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        background: #ff2c72;
        cursor: pointer;
        .icon-sousuo{
          display: inline-block;
          font-size: 20px;
          vertical-align: middle;
          padding-right: 2px;
          margin-top: -2px;
        }
      }
      .text{
        width: 98%;
        padding-left: 2%;
        height:40px;
        line-height:40px;
        font-size: 14px;
        outline: none;
        color: #fff;
        border: 1px solid #ff2c72;
        background-color: transparent;
      }
      .list{
        position: absolute;
        top:40px;
        left:0;
        right:0;
        background: #fff;
        border: 1px solid #ff2c72;
        .s_hot{
          padding: 6px 0;
          font-size: 14px;
          color: #666;
          text-align: center;
          border-bottom: 1px solid #ccc;
        }
        .none{
          padding: 16px;
          color: #999;
        }
        a{
          display: block;
          padding-left: 10px;
          line-height:28px;
          &:hover{
            color: #ff2c72;
            background: #f1f1f1;
          }
        }
      }
    }
  }
}
.navbox{
  height:35px;
  line-height:35px;
  border-top: 1px solid #4c4d4e;
  background: #1f2122;
  li{
    float: left;
    margin-right: 16px;
    a{
      display: block;
      padding:0 20px;
      color: #fff;
      &:hover,&.active{
        background: #ff2c72;
      }
    }
  }
}
.loginPop{
  position: fixed;
  top: 30%;
  left: 50%;
  width: 500px;
  margin-left: -250px;
  padding-bottom: 40px;
  z-index: 99;
  background:#fff;
  background-image: linear-gradient(to bottom , #adf1bc, #ddecc9);
  box-shadow: 2px 2px 5px rgba(0,0,0,.5);
  .title{
    padding: 16px 0;
    font-size: 16px;
    text-align: center;
    .close{
      position: absolute;
      right: 0;
      top: 0;
      padding: 6px 12px;
      cursor: pointer;
      display: block;
    }
  }
  ul{
    padding:0 100px;
    li{
      padding: 8px 0;
      span{
        width: 70px;
        padding-right: 6px;
        display: inline-block;
        text-align: right;
      }
      &.btn{
        padding-left: 65px;
        a{
          display: block;
          width: 90%;
          line-height: 36px;
          text-align: center;
          margin: 0 auto;
          color: #fff;
          background: #ff2c72;
        }
      }
    }
    input{
      padding: 6px 5px;
      width: 70%;
      border: 1px solid #ccc;
    }
  }
}
</style>

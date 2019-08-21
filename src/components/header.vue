<template>
  <div>
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
              <img :src="userInfo1.avatarUrl" :alt="userInfo1.username" class="avatar">
              {{userInfo1.username}}
              <icon name="unfold" @mouseout="mouseoutMenu"></icon>
              <div class="tier" v-show="isHasMenu" @mouseout="mouseoutMenu">
                <router-link to='/ucenter'>个人中心</router-link>
                <router-link to='/like'>我喜欢的</router-link>
                <a @click="outLoagin">退出</a>
              </div>
            </span>
            <router-link to='/order'>我的订单</router-link>
            <router-link to='/cart'><icon name="buycar"></icon>购物车</router-link>
          </div>
          </template>
          <template v-else>
          <div class="ucenter">
            <a href="javascript:;" @click="LoaginPop"><icon name="user"></icon>登录</a>
            <router-link to='/order'>我的订单</router-link>
            <router-link to='/cart'><icon name="buycar"></icon>购物车</router-link>
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
    </div>
    <div class="loginLayer" v-show="isLoginShow">
      <div class="loginPop">
        <div class="title">用户登录<span class="close" @click="closeLoginPop">x</span></div>
        <icon name="user"></icon>
        <ul>
          <li class="user"><icon name="user"></icon><input type="text" v-model="userInfo.username" placeholder="请输入用户名"></li>
          <li class="pass"><icon name="password"></icon><input type="password" v-model="userInfo.password" minlength="6" placeholder="请输入密码"></li>
          <li class="btn"><a href="javascript:;" @click="login">登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data () {
    return {
      baseInfo: {
        url: 'https://adeng.vip',
        imgurl: 'http://s.yytcdn.com/v2/images/shop-logo-v1.png',
        title: '音悦商城'
      },
      searchList: [],
      userInfo1: {
        username: '',
        avatarUrl: ''
      },
      userInfo: {
        username: '',
        password: ''
      },
      searchVaule: '',
      focused: false,
      isLogin: false,
      isLoginShow: false,
      isHasMenu: false
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      let token = sessionStorage.getItem('token')
      if (token) {
        this.$http.Get('/api/user-info', { token: token }).then(res => {
          this.userInfo1 = res.data
          this.isLogin = true
        }).catch(err => {
          console.log(err)
        })
      } else {
        console.log('TODU')
      }
    },
    login () {
      let that = this
      if (this.userInfo.username === '') {
        alert('用户名不能为空~')
        return
      }
      if (this.userInfo.password === '') {
        alert('密码不能为空~')
        return
      }
      this.$http.Post('/api/login', that.userInfo).then(res => {
        this.userInfo1 = res.data
        store.commit('Mut_login', res.data)
        this.isLogin = !this.isLogin
        this.isLoginShow = !this.isLoginShow
      }).catch(err => {
        console.log(err)
      })
    },
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
      this.isLogin = !this.isLogin
    },
    LoaginPop () {
      this.isLoginShow = !this.isLoginShow
    },
    closeLoginPop () {
      this.isLoginShow = !this.isLoginShow
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  color: #fff;
  background: #1f2122;
  z-index: 60;
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
        .svg-icon{
          padding-right: 3px;
          width: 20px;
          height: 20px;
          margin-top: -6px;
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
          width: 18px;
          height: 20px;
          vertical-align: middle;
          color: #ff2c72;
        }
        // &:hover{
        //   .icon-unfold{
        //     animation:.5s linear;
        //     transform:rotate(180deg);
        //   }
        // }
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
.loginLayer{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 88;
  background: rgba(0,0,0,.5);
  .loginPop{
    position: absolute;
    top: 30%;
    left: 50%;
    width: 500px;
    margin-left: -250px;
    padding-bottom: 40px;
    z-index: 99;
    background:#fff;
    background-image: linear-gradient(to bottom , #f5fdea, #ddecc9);
    box-shadow: 2px 2px 5px rgba(0,0,0,.5);
    overflow: hidden;
    >.icon-user{
      position: absolute;
      top: -50px;
      left: -50px;
      width: 260px;
      fill: #dceaa9;
      opacity: .5;
    }
    .title{
      padding: 16px 0;
      font-size: 21px;
      text-align: center;
      .close{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 18px;
        padding: 6px 12px;
        cursor: pointer;
        display: block;
      }
    }
    ul{
      padding:0 100px;
      li{
        position: relative;
        padding: 8px 0;
        .svg-icon{
          position: absolute;
          left: 8px;
          top: 18px;
          width: 24px;
          height: 24px;
          fill: #999;
        }
        &.btn{
          a{
            display: block;
            width: 100%;
            line-height: 42px;
            font-size: 18px;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            background: #ff2c72;
            &:hover{
              opacity: .9;
            }
          }
        }
      }
      input{
        padding: 12px 40px;
        width: 100%;
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>

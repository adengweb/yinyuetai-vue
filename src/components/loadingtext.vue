<template>
  <div class="g-loading">
    <div class="loader"></div>
    <div>{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '数据加载中..'
    }
  }
}
</script>

<style lang="scss" scoped>
.g-loading {
  position: relative;
  padding: 80px 0;
  text-align: center;

  .loader {
    width: 30px;
    height: 30px;
    margin: 15px auto 20px;
    border-radius: 50%;
    animation: loading 1.1s infinite linear;
    text-indent: -9999em;
    border-top: 0.3em solid hsla(0, 0%, 100%, 0.2);
    border-right: 0.3em solid hsla(0, 0%, 100%, 0.2);
    border-bottom: 0.3em solid hsla(0, 0%, 100%, 0.2);
    border-left: 0.3em solid #666;
  }
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>

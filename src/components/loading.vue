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
      default: '正在加载'
    }
  }
}
</script>

<style lang="scss" scoped>
.g-loading {
  position: fixed;
  z-index: 999;
  top: 40%;
  left: 50%;
  width: 6.4rem;
  height: 6.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 0.2rem;
  margin-left: -1.7rem;
  color: #fff;
  font-size: 0.6rem;

  .loader {
    width: 1.9em;
    height: 1.9em;
    margin: 0.5rem auto 0.18rem;
    border-radius: 50%;
    animation: loading 1.1s infinite linear;
    text-indent: -9999em;
    border-top: 0.3em solid hsla(0, 0%, 100%, 0.2);
    border-right: 0.3em solid hsla(0, 0%, 100%, 0.2);
    border-bottom: 0.3em solid hsla(0, 0%, 100%, 0.2);
    border-left: 0.3em solid #fff;
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

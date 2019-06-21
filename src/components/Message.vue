<template>
  <div>Message</div>
</template>
<script>
export default {
  props: {
    type: String,
    default: {
      title: '提示',
      text: '提示内容'
    }
  }
}
</script>

<template>
  <div id="head_box">
    <HeadUser></HeadUser>
    <HeadLeavingMessage></HeadLeavingMessage>
  </div>
</template>

<script>
import HeadUser from '@/components/HeadUser.vue'
import HeadLeavingMessage from '@/components/HeadLeavingMessage.vue'
export default {
  components: {
    HeadUser,
    HeadLeavingMessage
  }
}
</script>
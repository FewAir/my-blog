<style>
.leaving_message {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  box-shadow: 2px 2px 2px;
  border-radius: 20px;
  margin-top: 6%;
}

.leaving_message:hover {
  border: 1px solid #969696;
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: inset 2px 2px 2px;
}
</style>
<template>
  <div class="leaving_message" @click="btnChange">给我留言</div>
</template>
<script>
export default {
  data () {
    return {
      // btnStyle: [
      //   { border: ['1px', 'solid', '#969696'] },
      //   { borderRadius: '20px', },
      //   { transition: '0.4s', },
      //   { boxShadow: ['inset', '2px', '2px', '2px'] }
      // ]\
      btnStyle: [
        { border: ['1px', 'solid', '#969696'] },
        { borderRadius: '20px', },
        { transition: '0.4s', },
        { boxShadow: ['inset', '2px', '2px', '2px'] }
      ]


    }
  },
  methods: {
    btnChange () {
      this.btnStyle
    }
  }

}
</script>
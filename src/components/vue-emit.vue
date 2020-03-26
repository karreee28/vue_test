<template>
  <p><button @click="clickCount">클릭 횟수 :</button> <span> {{ clicks }}</span></p>
</template>

<script>
export default {
  name: 'VueEmit',
  components: { },
  data () {
    return {
      clicks: 0,
    }
  },
  methods: {
    clickCount : function () {
      this.clicks++
      this.$emit('totalClick') //부모 컴포넌트에게 totalClick이라는 이름으로 이벤트 전달.
    },
  },
  created () {
    this.$EventBus.$on('clickCountReset', () => { //Bus를 통해 비 부모 자식간인 vue-bus 컴포넌트의 이벤트 수신 후
      this.clicks = 0  //데이터 처리
    });
  },
};
</script>
<style type="text/css">
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }



</style>

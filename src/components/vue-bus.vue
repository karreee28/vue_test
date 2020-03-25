<template>
  <p><button @click="$EventBus.$emit('clickCountReset')">Reset</button></p> <!--Bus를 통해 clickCountReset 이벤트 전달 -->
</template>

<script>
export default {
  name: 'VueBus',
  components: { },
  data () {
    return {
    }
  },
  methods: {

  }
};
</script>
<style type="text/css">


</style>

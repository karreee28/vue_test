<template>

  <section class="wrap">
    <h2>Vue.js 이벤트 한정자</h2>
    <article>
      <p><span>a</span> <input type="text" v-model.number="number"> <span style="padding-left: 20px;">3 + a = </span> {{3+number}} //값이 숫자일 경우</p>
      <p><span>b</span> <input type="text" v-model="normal"> <span style="padding-left: 20px;">3 + b = </span> {{3+normal}} //값이 문자일 경우</p>
    </article>
    <article>

      <p><b>Enter 이벤트</b></p>
      <b-alert variant="success" v-model="alert" dismissible>{{type3}} Alert</b-alert>
      <input type="text" @keyup.enter="showAlert()" v-model="type3">

    </article>
  </section>
</template>

<script>
export default {
  name: 'vueEvent',
  components: { },
  data () {
    return {
      number: 0,
      normal: '',
      type3: '',
      alert: false,
    }
  },
  methods: {
    showAlert() {
      console.log('aa');
      this.alert = !this.alert;
    }

  }
};
</script>
<style type="text/css">



</style>

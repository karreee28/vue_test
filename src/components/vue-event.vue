<template>

  <section class="wrap">
    <h2>Vue.js 이벤트 한정자</h2>
    <article>
      <p><span>a</span> <input type="text" v-model.number="number"> <span style="padding-left: 20px;">3 + a = </span> {{3+number}} //값이 숫자일 경우</p>
      <p><span>b</span> <input type="text" v-model="normal"> <span style="padding-left: 20px;">3 + b = </span> {{3+normal}} //값이 문자일 경우</p>
    </article>
    <article>

      <b>Enter 이벤트1</b>
      <b-alert variant="success" v-model="alert" dismissible>{{type3}} Alert</b-alert>
      <input type="text" @keyup.enter="showAlert" v-model="type3">
      <p>값을 입력 후 Enter를 치면 해당 내용의 Alert창이 뜸</p>

      <b>Enter 이벤트2</b>
      <input type="text" @keyup.enter="showAlert2"> <span style="padding-left: 20px;">{{ showAlert2Value }}</span>
      <p>값을 입력 후 Enter를 치면 우측에 해당 내용 표시(console에 이벤트 값 표시)</p>

    </article>
  </section>
</template>

<script>
export default {
  name: 'VueEvent',
  components: { },
  data () {
    return {
      number: 0,
      normal: '',
      type3: '',
      alert: false,
      showAlert2Value: '',
    }
  },
  methods: {
    showAlert() {
      this.alert = !this.alert;
    },
    showAlert2(event) {
      console.log(event); //이벤트 값 콘솔에 표시
      console.log(event.srcElement.value); //입력 값 콘솔에 표시
      this.showAlert2Value = event.srcElement.value; //입력 값을 데이터 showAlert2Value에 보냄
    }
  }
};
</script>
<style type="text/css">



</style>

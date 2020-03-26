<template>

  <section class="wrap">
    <h2>Vue.js 클래스 바인딩</h2>
    <article>
      <p v-bind:class="[ color ? 'red' : 'blue']">클래스 바인드 텍스트</p> <!--조건부 연산자 - 조건 ? 표현식1 : 표현식2 // 조건이 true면 표현식1, false면 표현식2 반환-->
      <button @click="flipColor">flipColor</button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'VueCSSBind',
  components: { },
  data () {
    return {
      color: true,

    }
  },
  methods: {
    flipColor : function () {
      console.log('aa');
      this.color = !this.color;
    }

  }
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

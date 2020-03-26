<template>

  <section class="wrap">
    <h2>Vue.js computed, watch</h2>
    <article>
        <p><b>computed</b>
        data 값에 변화가 있을 때 자동으로 연산 후 출력 <br>
        한번 연산한 값을 캐싱해서 필요한 부분에 재사용함</p>
        <p><b>watch</b>
        data가 변경될 때마다 로직 실행. computed 속성과 유사</p>
        <p><b>computed, watch는 각각 어떤 때 선택하면 좋을까요?</b>
        <strong>computed</strong> : 값이 변경될 때 처리결과 값이 자동으로 변경되는 경우. 내장 api를 사용하는 간단한 연산 정도에 적합<br>
        <strong>watch</strong> : 값이 변경될 때 이벤트를 발생시킬 경우(ex. input). 시간이 상대적으로 더 많이 소모되는 비동기 처리나 api 호출 시에 적합<br>
        computed로 구현 가능한 것은 computed로 구현하고, 불가능한 것은 watch로 구현하는 것이 좋음</p>
    </article>
    <article>
        <p><b>computed 예제</b>
        원본: "{{msg}}"<br>
        역순: "{{reversedMessage}}"</p>
        <p><b>watch 예제</b>
        <input type="text" v-model="msg2"><br>
        입력메세지 : {{msg2}} //콘솔창 확인</p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'VueComputed',
  components: { },
  data () {
    return {
        msg: '안녕하세요',
        msg2: '',
    }
  },
  methods: {

  },
  computed: {
      reversedMessage: function () {
          console.log('reversed Message!'); //computed의 캐시화로 인해 1회만 호출
          return this.msg.split('').reverse().join(''); //data 값 역순으로 뒤집음
      }

  },
  watch: {
      msg2: function (data) {
          console.log('데이터가 갱신되었습니다 : ',data) //data 값을 console창에 찍음

      }

  }
};
</script>
<style type="text/css">


</style>

<template>

  <section class="wrap">
    <h2>Javascript</h2>
    <article>
      <p><b>자바스크립트 타이머가 늦는 이유</b>
      함수를 처리하는 콜 스택의 라인이 1개이기 때문에 타이머를 호출하고 별개로 다른 이벤트를 실행하면 처리하는 과정에서 딜레이가 생김. 타이머는 자바스크립트의 콜 스택 라인에 포함 된 기능이 아니라 브라우저에서 불러오기 때문에 콜 스택은 처리하던 이벤트를 마저 처리하고 타이머의 요청을 받아서 처리</p>
      <p><b>async / await 개념</b>
      <strong>async</strong> : 비동기처리 방식의 동기식 처리를 위한 콜백 지옥에서 벗어나려고 만든 promise 함수를 리턴하는 함수(일반 함수도 리턴 가능). <br>
      일반 함수를 통하여 리턴도 가능하지만 리턴 함수를 따로 명시해줘야하고, async는 결과값 자체가 리턴값이라 간단해짐 <br>   
      <strong>await</strong> : async에서 사용. 뒤에 명시된 함수의 실행을 기다림. promise의 리턴 실행인 then 지옥에서 벗어 날 수 있음.</p>
    </article>
    <article>
        <p><b>함수형 프로그래밍, 절차형 프로그래밍, 객체지향 프로그래밍은 어떻게 다른가요</b>
        <strong>함수형</strong> : 상태와 데이터를 변경하는것을 피하면서 대입문 없이 프로그래밍 하는 것<br>
        <strong>절차형</strong> : 순차적으로 연속적인 계산 과정을 포함한 방식으로 데이터 중심으로 구현<br>
        <strong>객체지향</strong> : 기능 중심으로 메서드(동작) 구현</p>
        <p><b>함수형 프로그래밍의 장점은 무엇이고, 함수형 프로그래밍은 어떻게 하나요</b>
        <strong>장점</strong> : 간결하고 예측하기 쉬워 테스트가 더 쉬워진다.<br>
        <strong>방법</strong> : 입력을 받고 출력을 반환할 때 외부의 값에 영향을 받지 않아야 한다.</p>
        <p><strong>rest</strong> : 네트워크 상에서 클라이언트와 서버 사이의 통신 방법 중 하나<br>
        <strong>rest api</strong> : REST를 통해 서비스 API를 구현한 것<br>
        <strong>rest full</strong> : 이해하기 쉽고 사용하기 쉬운 REST API를 만들기 위해 제시된 REST 가이드라인</p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PartJS',
  components: { },
  data () {
    return { //데이터 값이 없어도 리턴 필수

    }
  },
  methods: {

  }
};
</script>
<style type="text/css">



</style>

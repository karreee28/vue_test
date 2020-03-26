<template>

  <section class="wrap">
    <h2>Vue.js 기타 개념</h2>
    <article>
      <p><b>생명주기 훅(라이프 사이클)</b>
      <strong>Creation(컴포넌트 초기화)</strong> : 컴포넌트가 돔에 추가되기 전 단계. 서버 렌더링에서도 지원되므로 클라이언트 단과 서버단 모두 처리 가능. 돔에 접근하거나 this.$el 사용 불가능.<br>
      <strong>beforeCreate</strong> : 인스턴스 초기화 후 가장 먼저 실행. data, events가 세팅되지 않아 접근 시 에러.<br>
      <strong>Created</strong> : 인스턴스 생성 후 실행. data, events 활성화. 템플릿과 가상돔은 마운트 및 렌더링 안됨.<br>
      <br>
      <strong>Mounting(돔 삽입 단계)</strong> : 초기 렌더링 직전 컴포넌트에 직접 접근 가능. 서버 렌더링 지원 안함. 초기 렌더링 직전에 돔 변경 시 활용 가능. 단, 초기 세팅용 데이터 패치는 created 훅 사용(서버 사이드 렌더링 사용성에 문제됨).<br>
      <strong>beforeMount</strong> : 컴포넌트 마운트되기 직전에 실행. 아직 $el이 생성되지 않음. 서버사이드 렌더링에서는 호출 안됨. 대부분의 경우에 사용하지 않는 것이 좋음.<br>
      <strong>mounted</strong> : 마운트 직후 실행. $el을 포함한 모든 컴포넌트에 접근 가능. 서버 렌더링에서는 호출 안됨. 자식의 mounted훅이 실행된 이후 부모의 mounted훅이 실행됨.<br>
      <br>
      <strong>Updating(재렌더링)</strong> : 컴포넌트 속성이 변경되거나 해서 재렌더링이 일어나면 실행. 서버렌더링에서는 호출 안함. 디버깅이나 프로파일링을 위한 재렌더링 시점 파악에 유용.<br>
      <strong>beforeUpdate</strong> : 데이터가 변경되기 전에 실행. 새로운 데이터를 받아 더 많은 상태 변경이 가능하고 트리거 없음.<br>
      <strong>updated</strong> : 데이터 변경 후 실행. 돔 종속적인 연산 가능. 상태를 변경하면 무한 루프에 빠질 수 있음. 모든 자식 컴포넌트의 재렌더링 상태를 보장 안함.<br>
      <br>
      <strong>Destruction(해체)</strong><br>
      <strong>beforeDestroy</strong> : 뷰 인스턴스 제거되기 직전에 호출. 컴포넌트는 건들지 않으며 이벤트 리스너나 reactive subscription을 제거할 때 제격. 서버 렌더링에서 호출 안됨.<br>
      <strong>destroyed</strong> : 뷰 인스턴스 제거 후에 호출. 디렉티브 바인딩 해제, 이벤트 리스너 제거, 하위 인스턴스 삭제. 서버 렌더링에서 호출 안됨.<br>
      <br>
      그 외<br>
      <strong>activated</strong> : keep-alive 컴포넌트가 활성화 될 때 호출<br>
      <strong>deactivated</strong> : keep-alive 컴포넌트가 비활성화 될 때 호출<br>
      *keep-alive 컴포넌트는 주로 컴포넌트 상태를 보존하거나 재렌더링을 피하는데 사용</p>
      <p><b>*nextTick</b>
      데이터를 통해 만들어진 DOM이 완성되기 전에 DOM을 호출할 때 사용.
      nextTick으로 감싼 뒤 callback을 통해 DOM을 조작하게 되면 데이터갱신 후 UI까지 완료한 뒤에 nextTick에 있는 함수를 최종적으로 수행.</p>
    </article>
    <article>
        <p><b>babel</b>
        최신 자바스크립트 기능을 사용할 수 있도록 도와주는 자바스크립트 컴파일러(ex. syntax 변환, polyfill 기능, 소스 코드 변환, +@ 등)</p>
        <p><b>webpack</b>
        모듈 번들러. 자바스크립트 모듈을 받아 모두 연결해서 나타내는 정적 애셋(static asset)을 만듦.</p>
        <p><b>* axios</b>
        promise 함수 기반 http 통신 라이브러리. 직접적으로 Ajax(XMLHttpRequest - 데이터를 전송하는 객체 폼 api를 이용해서 데이터를 로드, 클라이언트와 서버간에 XML데이터를 주고 받는 기술)호출 가능. </p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'VueEtc',
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

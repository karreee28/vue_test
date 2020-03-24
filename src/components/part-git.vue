<template>

  <section class="wrap">
    <h2>GIT</h2>
    <article>
      <p><b>git clone</b>
      서버의 모든 파일을 로컬로 다운로드</p>
      <p><b>git add</b>
      로컬의 수정된 파일을 스테이지에 추가</p>
      <p><b>git commit</b>
      스테이지의 상태를 기록</p>
      <p><b>git push</b>
      commit한 내용을 서버로 업로드</p>
      <p><b>git pull</b>
      서버의 수정사항을 로컬로 다운로드</p>
      <p><b>git branch</b>
      서버 내에서의 작업공간 리스트 확인(동일한 프로젝트를 여러 버전으로 관리 가능)</p>
      <p><b>git stash</b>
      로컬의 수정 중인 파일을 임시 보관하고 가장 최근의 commit 상태로 만듦.</p>
      <p><b>버전 관리 시스템은 왜 필요한가요?</b>
      여러 명이 협업 시에 소스 간의 충돌을 방지하고 어떤 내용을 누가 수정했는 지 확인이 가능해 히스토리 관리가 쉬움. 오류가 났을 때 백업&복구 가능.</p>
      <p><b>git 외의 버전관리 시스템에는 무엇이 있나요? git은 그 시스템과 어떤 점이 다르며, 어떤 장점을 가지고 있나요?</b>
      SVN, mercurial 등이 있음.<br>
      중앙 서버에서 원하는 파일만 로컬에 받아 수정하는 SVN과는 달리, Git은 프로젝트 전체를 로컬에 다운 받은 뒤 수정하므로 중앙 서버에 문제가 생기더라도 어려움없이 복구나 작업이 가능.</p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'partGIT',
  components: { },
  data () {

  },
  methods: {

  }
};
</script>
<style type="text/css">



</style>

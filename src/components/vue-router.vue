<template>

  <section class="wrap">
    <h2>Vue.js Router</h2>
    <article class="router">
      <a href="/">Root</a>
      <router-link :to="{ name: 'PartGIT' }">GIT</router-link> <!--router-link, a 모두 사용 가능-->
      <a href="/html">HTML/CSS</a>
      <a href="/event">Event</a>
      <a href="/binding">CSS 바인딩</a>
      <a href="/router">Router</a>
      <router-view></router-view> <!--router 불러오는 영역-->
    </article>
  </section>
</template>

<script>
export default {
  name: 'VueRouter',
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

.router > a {
  display: inline-block;
  margin-right: 30px;
}


.wrap .wrap {
  margin-top: 20px;
}
.wrap .wrap h2 {
  display: none;
}



</style>

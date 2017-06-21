<template>
  <div class="app">
    <div class="container home">
      <home></home>
    </div>
    <background></background>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

.app {
  position: relative;
}
* {
  font-family: 'Roboto', sans-serif !important;
}
img {
  max-width: 100%;
  height: auto; 
}
.home {
  z-index: 2;
}
</style>

<script>
import Home from './pages/Home/index.vue';
import Background from './shared/Background.vue';

export default {
  components: {
    Home, Background,
  },
};
</script>

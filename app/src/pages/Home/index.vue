<template>
  <div>
    <app-header></app-header>
    <main-content></main-content>
  </div>
</template>

<script>
import Header from '../../components/Home/Header/index.vue';
import MainContent from '../../components/Home/MainContent/index.vue';

export default {
  components: {
    appHeader: Header,
    MainContent,
  },
};
</script>

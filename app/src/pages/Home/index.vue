<template>
  <div>
    <app-header></app-header>
    <main-content></main-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../../components/Home/Header/index.vue';
import MainContent from '../../components/Home/MainContent/index.vue';
import Footer from '../../components/Home/Footer/index.vue';

export default {
  components: {
    appHeader: Header,
    MainContent,
    appFooter: Footer,
  },
};
</script>

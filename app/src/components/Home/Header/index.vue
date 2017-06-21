<template>
  <div class="row header">
    <logo></logo>
    <app-menu></app-menu>
  </div>
</template>

<style lang="scss">
.header {
  padding-top: 40px;
}
</style>

<script>
import Logo from './Logo.vue';
import Menu from './Menu.vue';

export default {
  components: {
    Logo,
    appMenu: Menu,
  },
};
</script>


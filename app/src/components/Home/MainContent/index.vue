<template>
  <div class="row">
    <sidebar></sidebar>
    <news></news>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import News from './News.vue';

export default {
  components: {
    Sidebar, News,
  },
};
</script>

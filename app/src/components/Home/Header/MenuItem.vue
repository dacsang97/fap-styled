<template>
  <b-nav-item-dropdown :text="data.title" right>
    <b-dropdown-item :href="item.link" v-for="(item, idx) in data.submenu" :key="idx">
      {{item.title}}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  props: [
    'data',
  ],
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
  },
};
</script>

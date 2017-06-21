<template>
  <div class="col-md-3">
    <div class="card">
      <ul role="navigation" class="nav flex-column">
        <li v-for="(menu, index) in language" :key="index">
          <b-btn class="nav-item" v-b-toggle="toggleId(index)">{{menu.title}}</b-btn>
          <b-collapse :id="`${index}`">
            <b-nav vertical>
              <b-nav-item v-for="(item, idx) in menu.submenu" :key="idx" :href="item.link">{{item.title}}</b-nav-item>
            </b-nav>
          </b-collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  >li {
    >button {
      &, &:hover, &:active, &:focus {
        background-color: white !important;
        color: black;
        text-transform: uppercase;
        border-top: 0.5px solid #e7e7e7;
        border-bottom: 0.5px solid #e7e7e7;
        border-radius: 0;
        text-align: left;
        width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  methods: {
    toggleId(index) {
      return `${index}`;
    },
  },
  computed: {
    language() {
      return this.$langStore.defaultLanguage.menu;
    },
  },
};
</script>


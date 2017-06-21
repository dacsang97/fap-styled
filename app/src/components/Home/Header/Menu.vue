<template>
  <div class="col-md-8">
    <div class="row">
      <div class="col-md-12">
        <p class="text-right">
          {{user}} | <span><a href="http://fap.fpt.edu.vn/Student.aspx?logout=true">Logout</a></span>
          <img @click="changeLang(true)" class="img_flag" src="../../../assets/img/vietnam.png"/>
          <img @click="changeLang(false)" class="img_flag" src="../../../assets/img/english.png"/>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <nav class="navbar navbar-toggleable-md top-bar" role="navigation">
          <div class="container">
            <div class="navbar-translate">
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <item-menu v-for="(menu, index) in language" :key="index" :data="menu"></item-menu>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
nav {
  &.top-bar {
    background: #f7941d !important;
  }
}
.img_flag {
  width: 25px;
  cursor: pointer;
}
a {
  span {
    font-size: 12px;
  }
}
</style>

<script>
import MenuItem from './MenuItem.vue';

export default {
  data() {
    return {
      user: localStorage.getItem('user'),
      open: -1,
    };
  },
  methods: {
    changeLang(lang) {
      this.$langStore.changeLang(lang);
    },
    show(index) {
      if (this.open === index) {
        this.open = -1;
      } else {
        this.open = index;
      }
    },
  },
  computed: {
    language() {
      return this.$langStore.defaultLanguage.menu;
    },
  },
  components: {
    itemMenu: MenuItem,
  },
};
</script>

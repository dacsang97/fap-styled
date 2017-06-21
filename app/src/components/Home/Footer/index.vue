<template>
  <div class="row">
    <div class="col-md-12">
    <hr>
    </div>
    <div class="col-md-4">
      <div class="btn btn-link">Developed with <span class="heart"></span> by SangND. © VTeam Inc.</div>
    </div>
    <div class="col-md-8 text-right">
      <a :href="ft.news.link" class="btn btn-link">{{ft.news.title}}</a>
      <a :href="ft.home.link" class="btn btn-link">{{ft.home.title}}</a>
      <a :href="ft.changepass.link" class="btn btn-link">{{ft.changepass.title}}</a>
      <a :href="ft.email.link" class="btn btn-link">{{ft.email.title}}</a>
    </div>
  </div>
</template>

<style lang="scss">
.heart {
    color: #d43e00;
    animation: heartbeat 1s infinite;
    -webkit-animation: heartbeat ease 1.5s infinite;
    -moz-animation: heartbeat ease 1.5s infinite;
    -ms-animation: heartbeat ease 1.5s infinite;
    &::before {
      content: '❤';
    }
}

keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.2); }
  28% { transform: scale(1); }
  42% { transform: scale(1.2); }
  70% { transform: scale(1); }
}
@-webkit-keyframes heartbeat {
  0% { -webkit-transform: scale(1); }
  14% { -webkit-transform: scale(1.2); }
  28% { -webkit-transform: scale(1); }
  42% { -webkit-transform: scale(1.2); }
  70% { -webkit-transform: scale(1); }
}
@-moz-keyframes heartbeat {
  0% { -moz-transform: scale(1); }
  14% { -moz-transform: scale(1.2); }
  28% { -moz-transform: scale(1); }
  42% { -moz-transform: scale(1.2); }
  70% { -moz-transform: scale(1); }
}
@-ms-keyframes heartbeat {
  0% { -ms-transform: scale(1); }
  14% { -ms-transform: scale(1.2); }
  28% { -ms-transform: scale(1); }
  42% { -ms-transform: scale(1.2); }
  70% { -ms-transform: scale(1); }
}

</style>

<script>

export default {
  computed: {
    ft() {
      return this.$langStore.defaultLanguage.footer;
    },
  },
};
</script>

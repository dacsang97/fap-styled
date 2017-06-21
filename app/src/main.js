import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import LanguagePlugin from './plugin/LanguagePlugin';

Vue.use(BootstrapVue);
Vue.use(LanguagePlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    App,
  },
});

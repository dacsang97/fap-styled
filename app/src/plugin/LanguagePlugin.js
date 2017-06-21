import en from '../shared/menu/en.json';
import vi from '../shared/menu/vi.json';

const LanguageStore = {
  defaultLanguage: vi,
  en,
  vi,
  changeLang(value) {
    if (value) {
      this.defaultLanguage = vi;
    } else {
      this.defaultLanguage = en;
    }
  },
};

const LanguagePlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          langStore: LanguageStore,
        };
      },
    });
    Object.defineProperty(Vue.prototype, '$langStore', {
      get() {
        return this.$root.langStore;
      },
    });
  },
};

export default LanguagePlugin;

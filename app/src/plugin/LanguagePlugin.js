import en from '../shared/lang/en.json';
import vi from '../shared/lang/vi.json';

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

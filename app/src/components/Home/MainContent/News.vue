<template>
  <div class="col-md-9">
    <div class="card">
      <ul class="nav nav-tabs nav-tabs-neutral" role="tablist" data-background-color="orange">
        <li class="nav-item">
          <a class="nav-link active" role="tab">NEWS</a>
        </li>
      </ul>
      <div class="card-block">
        <a :href="item[2]" v-for="(item, index) in news" :key="index">
          <blockquote >
            <h6>{{item[0].substr(0, item[0].length - 2)}}</h6>
            <p class="blockquote blockquote-primary">
              {{item[1]}}
            </p>
          </blockquote>
        </a>
        <div class="text-right">
          <a :href="readmore.link" class="btn btn-primary btn-round">{{readmore.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
a {
  h6 {
    color: black;
  }
  &:hover {
    text-decoration: none;
  }
}
</style>

<script>
export default {
  computed: {
    news() {
      return JSON.parse(`[${localStorage.getItem('news')}]`);
    },
    readmore() {
      return this.$langStore.defaultLanguage.readmore;
    },
  },
};
</script>

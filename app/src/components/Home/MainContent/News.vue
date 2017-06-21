<template>
  <div class="col-md-9">
    <div class="card">
      <ul class="nav nav-tabs nav-tabs-neutral" role="tablist" data-background-color="orange">
        <li class="nav-item">
          <a class="nav-link active" role="tab">NEWS</a>
        </li>
      </ul>
      <div class="card-block">
        <blockquote v-for="(item, index) in news" :key="index">
          <h6>{{item[0].substr(0, item[0].length - 2)}}</h6>
          <p class="blockquote blockquote-primary">
            {{item[1]}}
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  
</style>

<script>
export default {
  computed: {
    news() {
      return JSON.parse(`[${localStorage.getItem('news')}]`);
    },
  },
};
</script>

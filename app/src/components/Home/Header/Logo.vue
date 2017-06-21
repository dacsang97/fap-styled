<template>
  <div class="col-md-4">
    <a class="th" href="#">
      <img src="https://uniap.fpt.edu.vn/students/img/logo.jpg">
    </a>
  </div>
</template>

<style lang="scss">
.th {
  border: solid 4px #FFFFFF;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
  line-height: 0;
  max-width: 100%;
  transition: all 200ms ease-out;

  &:hover, :focus {
    box-shadow: 0 0 6px 1px rgba(0, 140, 186, 0.5);
  } 
  &.radius {
    border-radius: 3px;
  }
}
a img {
  border: none; 
}
</style>

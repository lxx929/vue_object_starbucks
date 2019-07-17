<template>
  <header>
    <i class="icon iconfont icon-arrow-left"></i>
    <h2>加班/休假</h2>
    <div class="top-util">
      <i class="icon iconfont icon-riqixuanze"></i>
      <i class="icon iconfont icon-fangdajing"></i>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped  lang="scss">
header {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  i.icon{
      font-size: 18px;
      margin: 0 5px;
  }
  h2{
      font-weight: 500;
  }
 
}
</style>
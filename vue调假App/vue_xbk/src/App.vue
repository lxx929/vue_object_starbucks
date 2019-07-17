<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
  font-size: 14px;
}
html,
body,
#app,
.wrap {
  width: 100%;
  height: 100%;
}
.wrap {
  display: flex;
  flex-direction: column;
}
section {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
</style>

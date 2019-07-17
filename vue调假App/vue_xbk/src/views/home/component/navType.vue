<template>
  <div class="navType">
    <span
      v-for="(item,index) in navList"
      :key="index"
      :class="{active:activeType===item.type}"
      @click="typeTap(item.type)"
    >{{item.title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    activeType: {
      type: String,
      default: "overtime"
    }
  },
  data() {
    return {
      navList: [
        {
          title: "加班",
          type: "overtime"
        },
        {
          title: "休假",
          type: "vacation"
        }
      ]
    };
  },
  methods: {
    typeTap(type) {
      this.$emit("changeType",type);
    }
  }
};
</script>
<style scoped  lang="scss">
.navType {
  border: 1px solid #096241;
  display: table;
  border-radius: 20px;
  margin: 30px auto;
  overflow: hidden;
  span {
    display: inline-block;
    width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #096241;
  }
  span:first-child {
    border-right: 1px solid #eee;
  }
}
.active {
  background: #096241;
  color: #fff !important;
}
</style>
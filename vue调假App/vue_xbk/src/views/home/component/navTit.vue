<template>
  <ul>
    <li
      v-for="(item,index) in navList"
      :key="index"
      @click="changeIndex(index)"
      :class="{active:activeIndex===index}"
    >
      <span>
        <i :class="{
            iconfont:true,
            [item.icon]:true
        }"></i>
      </span>
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      navList: [
        {
          icon: "icon-05",
          title: "待处理"
        },
        {
          icon: "icon-07",
          title: "已发送"
        },
        {
          icon: "icon-yibangding",
          title: "已处理"
        }
      ]
    };
  },
  methods: {
    changeIndex(index) {
      console.log(index);
      this.$emit("changeTitle", index);
    }
  }
};
</script>
<style scoped  lang="scss">
ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  box-shadow: 0px 7px 15px rgb(236, 236, 236);
  li {
    display: flex;
    flex-direction: column;
    span {
      text-align: center;
      i {
        font-size: 20px;
      }
    }
  }
}
.active {
  color: #096241;
}
</style>
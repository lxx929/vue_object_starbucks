<template>
  <div class="wrap">
    <myHead />
    <section>
      <div class="nav">
        <navTit :activeIndex="options.status" @changeTitle="changeTitle" />
      </div>
      <div class="cont">
        <navType :activeType="options.type" @changeType="changeType" />
      </div>
      <div class="list">
        <contItem v-for="item in listdata" :key="item.applicationNumber" :itemdata="item" />
      </div>
    </section>
  </div>
</template>
<script>
import navTit from "./component/navTit"; //处理切换
import navType from "./component/navType"; //加班休假切换
import contItem from "./component/contItem"; //内容
// import request from "@/utils/request";
import server from '@/server';

export default {
  components: {
    navTit,
    navType,
    contItem
  },
  data() {
    return {
      listdata: [],
      options: {
        page: 1,
        pageSize: 10,
        create_at: 0,
        type: "overtime",
        status: 0
      }
    };
  },
  computed: {},
  methods: {
    changeTitle(index) {
      this.options.status = index;
      this.getData();
    },
    changeType(type) {
      this.options.type = type;
      this.getData();
    },
    getData() {
      server.taskList({
            ...this.options
          }).then(res => {
          if (res.code) {
            this.listdata = res.data;
          } else {
            alert(res.message);
          }
        });
    }
  },
  created() {
    // window.home=this;//home.options调用查看
    this.getData();
  },
  mounted() {}
};
</script>
<style scoped lang="">
.active {
  color: #096241;
}
</style>
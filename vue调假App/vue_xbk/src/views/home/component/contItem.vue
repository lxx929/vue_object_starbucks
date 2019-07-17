<template>
  <div class="list_title">
    <p>
      <span>{{itemdata.applicationNumber}}</span>
      <span>待审批</span>
    </p>
    <ul class="list_cont">
      <li>
        <span>申请人</span>
        <span>{{itemdata.nickname}}</span>
      </li>
      <li>
        <span>{{title}}类型</span>
        <span>{{type}}</span>
      </li>
      <li>
        <span>{{title}}日期</span>
        <span>{{starttime}}</span>
      </li>
      <li>
        <span>{{title}}时数</span>
        <span>{{times}}h</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    itemdata: {
      type: Object
    }
  },
  computed: {
    type() {
      if (this.itemdata.list_type === "overtime") {
        switch (this.itemdata.type) {
          case 1:
            return "双休日加班";
          case 2:
            return "节假日加班";
          case 3:
            return "工作日加班";
          default:
            return "加班";
        }
      } else {
        switch (this.itemdata.type) {
          case 1:
            return "年假";
          case 2:
            return "调休";
          default:
            return "休假";
        }
      }
    },
    title() {
      return this.itemdata.list_type === "overtime" ? "加班" : "休假";
    },
    starttime(){
      let data=new Date(this.itemdata.startTime);
      return `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`;
    },
    times(){
      return parseInt((new Date(this.itemdata.endTime)-new Date(this.itemdata.startTime))/1000/60/60) ;
    }
  },
  data() {
    return {};
  },
  methods: {
     todetail(){
       this.$router.push('/detail/'+itemdata.list_type)
     }   
   },

};
</script>
<style scoped  lang="scss">
.list_title {
  width: 100%;
  p {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
  }
  ul.list_cont {
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 10px solid #eeeeee;
    li {
      width: 50%;
      margin: 5px 0;
      span:first-child {
        display: inline-block;
        width: 70px;
        color:#999;
      }
    }
  }
}
</style>
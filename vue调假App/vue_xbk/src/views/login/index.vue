<template>
  <div class="login">
    <input type="text" placeholder="请输入账号" v-model="phone" />
    <input type="text" placeholder="请输入密码" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import server from "@/server";
export default {
  data() {
    return {
      phone: "", //账户(手机号)
      password: "" //密码
    };
  },
  methods: {
    login() {
      let { phone, password } = this;
      server
        .login({
          phone,
          password
        })
        .then(res => {  
          console.log(res);
          let { token } = res;
          localStorage.setItem("token", token);
          this.$router.back();
        })
        .catch(error => {
          //错误对象
          let { data } = error.response;
          alert(data.message);
        });
    }
  }
};
</script>
<style scoped  lang="">
</style>
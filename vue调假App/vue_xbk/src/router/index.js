import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home";
import My from "../views/my";
import Login from "../views/login";

// import request from "@/utils/request";
import server from "@/server";

Vue.use(Router);

const routers = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      meta: {
        islogin: false,
        title: "加班/休假"
      },
      component: Home
    },
    {
      path: "/detail/:name/:id",
      name: "home",
      meta: {
        islogin: false,
        title: "加班/休假"
      },
      component: Home
    },
    {
      path: "/my",
      name: "my",
      meta: {
        islogin: true,
        title: "个人中心"
      },
      component: My
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

routers.beforeEach((to, from, next) => {
  let { islogin, title } = to.meta;
  document.title = title;
  if (islogin) {//登录权限
    server
      .isLogin()
      .then(res => {
        console.log(res);
        next();
      })
      .catch(error => {
        if (error.response.status === 401) {
          next("/login");
        }
      });
    return;
  }else{
      next();
  }

});

export default routers;

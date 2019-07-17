import Axios from "axios";

const request = Axios.create({
  baseURL: "http://localhost:8080"
});

request.interceptors.request.use(
  config => {
    config.headers.token = localStorage.getItem("token");
    //响应成功时
    return config;
  },
  error => {
    //返回响应失败的对象
    return Promise.reject(error);
  }
);

//axios官网查的
request.interceptors.response.use(
  data => {
    //响应成功时
    return data.data;
  },
  error => {
    //返回响应失败的对象
    return Promise.reject(error);
  }
);

// Axios.get(url).then().catch();//结构

//解决每次请求都要获取结构后的data
//可直接接收data
export default request;

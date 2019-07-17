import request from '@/utils/request';

export default {
    login:(data)=>request.post('/api/login',data),//登录
    taskList:(params)=>request.get('/api/task/list',{//获取加班或休假数据
        params
    }),
    isLogin:()=>request.get('/api/user/info')//查询用户登录状态
}
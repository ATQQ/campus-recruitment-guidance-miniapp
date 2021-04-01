import http from './http'

const apis={}

//用户登录
apis.postUser=(params)=>http.request('/user/userlist','POST',params);



export default apis;
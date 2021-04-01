import config from './base'

const http={}

http.request=(url,method,data)=>{
    return uni.request({
        url:`config.baseURL${url}`,
        method:method,
        header:config.header,
        data:data,
        dataType:'json'
    }).then(res=>{
        console.log(res);
    }).catch(error=>{
        console.log(error)
    })
}

export default http;